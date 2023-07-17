import React from 'react'
import logo from "./images/rain.png";
import {RiCodeBoxFill} from 'react-icons/ri';
import {RiMap2Line} from 'react-icons/ri';
import {RiTimeLine} from 'react-icons/ri';
import {RiPhoneFill} from 'react-icons/ri';
import {RiUserFill} from 'react-icons/ri';
import {RiHome5Line} from 'react-icons/ri';


function Navbar() {
  return (
    <div>
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Home">Mausam.UI<img className="weather-icon" src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-2 ">
          <a className="nav-link active nav-attribute" aria-current="page" href="/Home" style={{color:'white' , width:'82px'}}>Home <RiHome5Line/></a>
        </li>
        <li className="nav-item px-2 ">
          <a className="nav-link active nav-attribute" aria-current="page" href="/Map" style={{color:'white' , width:'70.5px'}}>Map <RiMap2Line/></a>
        </li>
        <li className="nav-item px-2 " style={{transition: 0.5}}>
          <a className="nav-link active nav-attribute" href="/Forecast" style={{color:'white', width:'108.5px'}}>Forecaste <RiTimeLine/></a>
        </li>
        <li className="nav-item dropdown px-2 ">
          <a className="nav-link dropdown-toggle active nav-attribute" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
            Developer <RiCodeBoxFill/>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Contact <RiPhoneFill/></a></li>
            <li><a className="dropdown-item" href="#">About Us <RiUserFill/></a></li>
             
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

