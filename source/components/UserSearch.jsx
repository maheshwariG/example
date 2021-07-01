/**
 * Author : Govind Maheshwari
 * Description : This file contains the UI element which displays on search page
 * This is the funtional component.
 */
import React,{useState} from 'react';
import styles from './UserSearch.css';

const UserSearch=({data})=>{
    const [show,setShow]=useState(false);
    const showAllInfo = ()=>{
        setShow(!show);
    }
    return(
        <a onClick={showAllInfo} className={styles.search}>
            <ul>
                <li className={styles.mainSpan}>
                <span>Name: {data.name}</span>
                <span>Locality: {data.locality}</span>
                </li>
                {show && 
                        <li className={styles.mainList}>
                        <span>Name: {data.name}</span>
                        <br/>
                        <span>Locality:{data.locality}</span>
                        <br/>
                        <span >AGE : {data.age}</span>
                        <br/>
                        <span >Date : {data.guest}</span>
                        <br/>
                        <span >D.O.B : {data.dob}</span>
                        <br/>
                        <span >Profession : {data.profession}</span>
                        <br/>
                        <span > Address : {data.address}</span>
                        </li>
                }
            </ul>
        </a>
    )
}
export default UserSearch;