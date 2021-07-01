module.exports= {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module:{
        rules:[
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            }
        ]
    }
}