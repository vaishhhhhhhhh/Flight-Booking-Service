import { React } from "react";
import {  Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Flightbooking from "./Flightbooking";
import Search from "./Searchform";
import Flightdetails from "./Flightdetails";
import Login from "./Login";
import Register from "./Register";
import Form from "./Form";


const Index = () => {

  return(
    <Router>
      <Routes>
        <Route path="/"  element={<Search />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/form"  element={<Form/>} />
        <Route path="/flightdetails"  element={<Flightdetails />} />
        <Route path="/flightbooking"  element={<Flightbooking />} />
      </Routes>
    </Router>
 

  );
};
export default Index;