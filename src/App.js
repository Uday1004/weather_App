import "./App.css";
import Footer from "./component/Footer";
import Forecaste from "./component/Forecaste";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import WeatherMap from "./component/map";
import About from "./component/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
    <>
    
      <div><Navbar/></div>
      {/* <div><Main/></div>   */}
      {/* <div><About/></div> */}
       
      <Routes>
    
        <Route exact path='/home' element={<Main/>}/>
        <Route exact path='/' element={<Main/>}/>


        {/* </Route> */}
          <Route exact path="/Map" element={<WeatherMap/>}/>
          {/* </Route> */}
             
          <Route exact path="/Forecast" element={<Forecaste/>}/>
          <Route exact path="/About us" element={<About/>}/>
          {/* </Route> */}
            
           
        </Routes>
        <div style={{marginTop:'250px'}}><Footer/></div>
    </>
    </Router>
  );
}

export default App;
