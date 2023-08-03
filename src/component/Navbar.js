import React from 'react'
import logo from "./images/rain.png";
import {RiCodeBoxFill} from 'react-icons/ri';
import {RiMap2Line} from 'react-icons/ri';
import {RiTimeLine} from 'react-icons/ri';
import {RiPhoneFill} from 'react-icons/ri';
import {RiUserFill} from 'react-icons/ri';
import {RiHome5Line} from 'react-icons/ri';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Home">Mausam.UI<img className="weather-icon" src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-2 ">
          <Link className="nav-link active nav-attribute" aria-current="page" to="/Home" style={{color:'white' , width:'82px'}}>Home <RiHome5Line/></Link>
        </li>
        <li className="nav-item px-2 ">
          <Link className="nav-link active nav-attribute" aria-current="page" to="/Map" style={{color:'white' , width:'70.5px'}}>Map <RiMap2Line/></Link>
        </li>
        <li className="nav-item px-2 " style={{transition: 0.5}}>
          <Link className="nav-link active nav-attribute" to="/Forecast" style={{color:'white', width:'108.5px'}}>Forecaste <RiTimeLine/></Link>
        </li>
        <li className="nav-item dropdown px-2 ">
          <Link className="nav-link dropdown-toggle active nav-attribute" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
            Developer <RiCodeBoxFill/>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Contact <RiPhoneFill/></Link></li>
            <li><Link className="dropdown-item" to="/About us">About Us <RiUserFill/></Link></li>
             
          </ul>
        </li>
         
      </ul>
      
    </div>
  </div>
</nav>
      </>
      
    </div>
  )
}

export default Navbar

