/**
 * Author : Govind Maheshwari
 * Description : This file contains the Application navigation elements
 * Used the react router dom and react-router-config for router logic
 */
import React from 'react';
import { renderRoutes } from "react-router-config";
import { Link} from "react-router-dom";
import styles from './Navigation.css';
const linkNav = {
  padding: "20px",
  fontSize:"20px"
};

const Navigation = ({ route,location}) => {
const { pathname } = location;
const splitLocation = pathname.split("/");
console.log(splitLocation);
    return (
    <div className={styles.navElement}>
      <Link className={splitLocation[1] === "" && styles.active} style={linkNav} to="/">Registration</Link>
      <Link className={splitLocation[1] === "search" && styles.active} style={linkNav} to="/search">Search</Link>
      <Link className={splitLocation[1] === "reports" && styles.active} style={linkNav} to="/reports">Reports</Link>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes)}
    </div>
  )
}
  export default Navigation;