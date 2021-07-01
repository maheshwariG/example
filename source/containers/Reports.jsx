/**
 * Author : Govind Maheshwari
 * Description : This is the conatiner for the Bar chart component.
 * This fetch the data and pass the data in required format to component
 */
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import BarChart from '../components/BarChart.jsx';
import styles from './Reports.css';
const Reports = (props) => {
    let arrAge=[0,0,0];
    const dataAgeLabels = [ "13-18", "18-25", "25+"];
    const [dataAgeCount,setAgeCount] =useState([]);


    let arrProfession=[0,0];
    const dataProfessionLabels = ["student", "employed"];
    const [dataProfessionCount,setProfessionCount] =useState([]);

    let arrGroup=[0,0,0];
    const dataGroupLabels = ["0", "1", "2"];
    const [dataGroupCount,setGroupCount] =useState([]);
    
    useEffect(()=>{
      axios.get('/users.json')
      .then(res => {
        const data =res.data;
        data.forEach((entry)=>{
          console.log(entry);
           if(entry.age >=13 && entry.age <=18){
            arrAge[0]+=1;
           }else if(entry.age >=18 && entry.age <=25){
            arrAge[1]+=1;
           }else if(entry.age >=26 ){
            arrAge[2]+=1;
           }

           if(entry.profession=="student") {
            arrProfession[0]+=1;
           }else if(entry.profession=="employed") {
            arrProfession[1]+=1;
           }


           if(entry.guest=="0") {
            arrGroup[0]+=1;
           }else if(entry.guest=="1") {
            arrGroup[1]+=1;
           }else if(entry.guest=="2") {
            arrGroup[2]+=1;
           }
        })
        setAgeCount(arrAge);
        setProfessionCount(arrProfession);
        setGroupCount(arrGroup);
      })
    },[])
    
    return (
      <div className={styles.flexContainer}>
       {dataAgeCount && dataAgeCount.length > 0 && <BarChart countLabel="Age Count" data={dataAgeCount} dataLabels={dataAgeLabels}/>} 
       {dataProfessionCount && dataProfessionCount.length > 0 && <BarChart countLabel="Profession/Student Count" data={dataProfessionCount} dataLabels={dataProfessionLabels}/>} 
       {dataGroupCount && dataGroupCount.length > 0 &&<BarChart countLabel="Average Group Size Count" data={dataGroupCount} dataLabels={dataGroupLabels}/>}
      </div>
    );
  };

  export default Reports;