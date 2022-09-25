import { React } from "react";
import {  Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Search from "./Searchform";
import Flightdetails from "./Flightdetails";
import Login from "./Login";
import Register from "./Register";
import Flightbooking from "./Flightbooking";
import Bookingbyid from "./Bookingbyid";
import Adminprofile from "../Adminprofile";
import Addflightdetails from "./Addflightdetails";
import Allflightdetails from "./Allflightdetails";
import Updateflightdetails from "./Updateflightdetails";
import Userdetails from "./Userdetails";
import Bookingdetails from "./Bookingdetails";


const Index = () => {

  return(
    <Router>
      <Routes>
        <Route path="/"  element={<Search />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/login"  element={<Login/>} />       
        <Route path="/flightbooking"  element={<Flightbooking/>} />
        <Route path="/flightdetails"  element={<Flightdetails />} />             
        <Route path="/admin"  element={<Adminprofile />} />
        <Route path="/bookingbyid"  element={<Bookingbyid />} /> 
        <Route path="/addflight"  element={<Addflightdetails />} />
        <Route path="/flight"  element={<Allflightdetails />} />
        <Route path="/updateflight"  element={<Updateflightdetails />} />
        <Route path="/user"  element={<Userdetails />} />
        <Route path="/bookingdetails"  element={<Bookingdetails />} />
       
      </Routes>
    </Router>
 

  );
};
export default Index;