import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiSearchLine } from 'react-icons/ri';
import humi from './images/humidity.png';
import windi from './images/wind.png';
import globe from './images/glob.png';
// import logo from './Weather-app/src/component/images/search-icon.png'


export default function Main() {
  const apikey = "146df592b88af707529963a10994a183"

  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [Icon, setIcon] = useState("");
  const [hum, setHum] = useState("");
  const [name, setName] = useState("");
  const [Country, setCountry] = useState("");
  const [wind, setwind] = useState("");
  const [isDataFetched, setIsDataFetched] = useState(false);

  const currentDate = new Date().toString().slice(0, 25);


  const fetchData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
      // Handle the response data
      const onlinedata = response.data;
      setTemp(onlinedata.main.temp);
      setDesc(onlinedata.weather[0].description);
      setHum(onlinedata.main.humidity);
      setName(onlinedata.name);
      setIcon(onlinedata.weather[0].icon);
      setCountry(onlinedata.sys.country);
      setwind(onlinedata.wind.speed);

      setIsDataFetched(true);


      console.log(onlinedata)
    } catch (error) {
      // Handle any errors
      console.error(error);
      alert("Please enter a valid location");
    }
  };

  const defaultData = async () => {
    if (isDataFetched === false || city === "") {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${apikey}&units=metric`
        );
        const onlinedata = response.data;
        setTemp(onlinedata.main.temp);
        setDesc(onlinedata.weather[0].description);
        setHum(onlinedata.main.humidity);
        setName(onlinedata.name);
        setIcon(onlinedata.weather[0].icon);
        setCountry(onlinedata.sys.country);
        setwind(onlinedata.wind.speed);

        // console.log(onlinedata);
      } catch (error) {
        // Handle any errors
        console.error(error);
        alert("Please enter a valid location");
      }
    }
  };

  useEffect(() => {
    defaultData();
  });


  return (
    <div className="container d-flex align-items-center justify-content-center" >
      <div className="container_app" style={{cursor:'auto'}}>
        <div className="Search">
          <form onSubmit={fetchData} className="search-bar" >
            <input
              className="app__input"
              type="text"
              placeholder="Enter City Name"
              onChange={(e) => setCity(e.target.value)}
              spellCheck='false'
              
            />
            <button className="button"><RiSearchLine className="search-icon" /></button>
          </form>
        </div>
           


        <div className="Title">
          <h2 className="main_title" >{(name).toUpperCase()} Weather</h2>
          <h1 className="app__temp">{Math.trunc(temp)}°C</h1>
        </div>
        <div className="app_desc">
        </div>

      <div className="grid-container">

        <div className="item item1">
          <img className="app_image" src={`http://openweathermap.org/img/wn/${Icon}.png`} alt="desc" />
          <h3 style={{cursor:'auto'}}>{desc}</h3>
        </div>
        <div className="item item2" >
            <img src={humi} alt="" />
          <h4 className="app__hum">Humidity: {hum}%</h4>
        </div>
        <div className="item item3">
          <img src={globe} alt="" />
          <h4 className="app__count">Country: {Country} </h4>
        </div>
        <div className="item item4">
          <img src={windi} alt="" />
          <h4 className="app__wind">Wind Speed: {Math.trunc(wind*3.6)} km/h</h4>
        </div>
      </div>  
      <div className="date-time">
          <h4 className="app__date">Date: {currentDate}</h4>
      </div>
      </div>
    </div>
           
  );
}
