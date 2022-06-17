import React from "react";
//import ReactDOM from "react-dom";
import {
  Routes,
  Route,
}from "react-router-dom"


import './App.css'
import Registration from "./component/registration";
import Userdata from "./component/Userdata";
function App() {
  
  return (

    <Routes>
      <Route path="/" element={<Registration/>} />
      <Route path="user-data" element={<Userdata />} />
      
    </Routes>
   
  );
}

export default App;
