import React from 'react';
import express from 'express';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import fs from 'fs';
import App from '../source/App';
const server=express();

server.use(express.static("build"));
server.use(express.static("public"));
server.post('/users', (req, res) => {
  let users;
  
  users= JSON.parse(fs.readFileSync(path.join(__dirname,'../../public','users.json'),'UTF-8'));
  console.log("Govind");
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    var jsonObj = JSON.parse(body);
    console.log(typeof(jsonObj));
    users.push(jsonObj); 
    fs.writeFileSync(
      path.join(__dirname,'../../public','users.json'),
      JSON.stringify(users),
      'utf-8'
    );
    res.status(200).json({ status: 'success' });
  })
})
server.get('*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const indexFile = path.resolve(path.join(__dirname,'..','index.html'));
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    return res.send(
      data.replace('<div id="app"></div>', `<div id="app">${app}</div>`)
    );
  });
});
  server.listen(5000,()=>{
    console.log("server started on port 5000");
})