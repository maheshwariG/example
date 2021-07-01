/**
 * Author : Govind Maheshwari
 * Description : This file contains the Registration form UI and it's submit logic.
 * USed the react hooks to implement teh funtionality
 */
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Prompt} from 'react-router-dom';
import styles from './RegistrationForm.css';
const RegistrationForm=()=>{
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [locality,setLocality]=useState("");
  const [date,setDate]=useState("");
  const [profession,setProfession]=useState('employed');
  const [guest,setGuest]=useState('0');
  const [address,setAddress]=useState("");
  const [show,showSuccessMsg]=useState(false);
  const [isBlocking,toggleBlocking]=useState(false);
  useEffect(()=>{
    if(name || age ||  locality || date || address) {
      toggleBlocking(true);
    } else {
      toggleBlocking(false);
    }
   }
  )
  const nameUpdate=(evt)=> {
    setName(evt.target.value);
  }
  const ageUpdate=(evt)=> {
    setAge(evt.target.value);
  }
  const localityUpdate=(evt)=>{
    setLocality(evt.target.value);
  }
  const dateUpdate=(evt)=> {
    setDate(evt.target.value);
  }
  const selectProfession=(evt)=>{
    setProfession(evt.target.value);
  }
  const selectGuest=(evt)=>{
    setGuest(evt.target.value);
  }
  const selectAddress=(evt)=>{
    setAddress(evt.target.value);
  }
  const handleSubmit=(evt)=>{
      evt.preventDefault();
      showSuccessMsg(false);
      axios({
        method: 'post',
        url: '/users',
        data: {
          name: name,
          age:age,
          locality:locality,
          date:date,
          profession:profession,
          guest:guest,
          address:address
        }
      }).then((res)=>{
        if(res.data){
          showSuccessMsg(true);
        }
      });
  }
  return (
      <React.Fragment>
        
        <div>
        <h1 className={styles.center}>Registration Form</h1>
        <form onSubmit={handleSubmit} >
          <div className="form-group">
            <label className={styles.labelField} htmlFor="nameImput">Name : </label>
            <input type="text" name="name" value={name} onChange={nameUpdate} className={styles.formControl} id="nameImput" placeholder="Name" required/>
          </div>
          <div className="form-group">
            <label className={styles.labelField} htmlFor="age">Age : </label>
            <input name="age" type="number" min="13" value={age} onChange={ageUpdate} className={styles.formControl} id="age" placeholder="Age" required/>
          </div>
          <div className="form-group">
            <label className={styles.labelField} htmlFor="locality">Locality : </label>
            <input name="Locality" type="text" value={locality} onChange={localityUpdate} className={styles.formControl} id="locality" placeholder="Eneter Locality" required/>
          </div>
          <div className="form-group">
            <label className={styles.labelField} htmlFor="start">D.O.B : </label>
            <input type="date" id="date" name="date" value={date} onChange={dateUpdate} className={styles.formControl} min="1950-01-01" max="2010-12-31" required/>
          </div>
          <div className="form-group">
            <label className={styles.labelField} htmlFor="profession">Profession : </label>
            <select id='profession' className={styles.formControl} value={profession} onChange={selectProfession}>
              <option value="employed">Employed</option>
              <option value="student">Student</option>
            </select>
         </div>
         <div className="form-group">
           <label className={styles.labelField} htmlFor="noofguest">No of Guest : </label>
           <select id="noofguest" className={styles.formControl} value={guest} onChange={selectGuest}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
         </div>
         <div className="form-group">
            <label className={styles.labelField} htmlFor="address">Address : </label>
            <textarea id="address" name="textarea" className={styles.formControl} maxLength="50" onChange={selectAddress} value={address} required>Enter Address</textarea>
         </div>
         <input type="submit" value="Submit" className={styles.center,styles.btn} />
         {show && <div>Form submitted successfully</div>}
         <Prompt when={isBlocking} message="Are you sure you want to leave ?"/>
         </form>
        </div>
      </React.Fragment>
  )
}
export default RegistrationForm;

