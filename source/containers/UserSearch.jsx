/**
 * Author : Govind Maheshwari
 * Description : This is the conatiner for UserSearch component.
 * This fetch the data and pass the data in required format to component.
 */
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Search from '../components/UserSearch.jsx';
import styles from './UserSearch.css';
const UserSearch=()=>{
  const [search, setSearch] = useState('');
  const [response, setResponse] = useState([]);
  const searchSpace = (event) => setSearch(event.target.value);
  useEffect(()=>{
    axios.get('/users.json')
    .then(res => {
      setResponse(res.data);
    })
  },[])
   
  const items =(response)=> response.filter((data)=>{
    if(search == null)
        return data
    else if(data.name.toLowerCase().includes(search.toLowerCase()) || data.locality.toLowerCase().includes(search.toLowerCase())){
        return data
    }
  }).map(data=>{
    return(
      <Search data={data}/>
    )
  })
    return (
        <React.Fragment>
            <div>  
            <input className={styles.searchField} type="text" value={search} placeholder="Enter name or locality for search" onChange={searchSpace} />
            <div className={styles.listHeading}>
              <spna>Click On the list to see the details</spna>
            </div>
            {items(response)}
            </div>
        </React.Fragment>
        
    )
}
export default UserSearch;