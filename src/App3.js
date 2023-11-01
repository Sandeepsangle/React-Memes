import { BrowserRouter as Router, Route, Routes,Link,Navigate } from "react-router-dom";
import {useState } from "react";
import Login from "./Component/Login";
import Navbars from "./Component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Dashboard from "./Component/Dashboard";
import Registration from "./Component/Registration";
import { Alert, Navbar } from "react-bootstrap";
import ShowMyList from "./Component/ShowMyList";
import Beginner from "./Component/Beginner";
import Intermediate from "./Component/Intermediate";
import React from 'react'

    
const App3 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const logIn = () => {
      setIsLoggedIn(true);
    };
    const logOut = () => {
      setIsLoggedIn(false);
    };
  return (
    <>
    <div className="text-primary bg-dark text-wrap"> <h1>This is react app</h1></div>
    <div className="form-group">
      <Router>
        <Navbars/>
        {isLoggedIn ? (
        <button type="submit" className="btn btn-dark btn-lg btn-block"
        onClick={logOut} style={{width:'10%',alignItems:'center'}}  >
          login
        </button>
        ):(
          <button type="submit" className="btn btn-dark btn-lg btn-block"
          onClick={logIn} style={{width:'10%'}} >Logout</button>
        )}
        <Routes>
          <Route exact path ="/beginner"  element={<Beginner />}/>
          <Route exact path = "/intermediate" element={<Intermediate/>}/>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/registration" element={<Registration />} />
         <Route exact path ="/dashboard" element ={isLoggedIn?<Dashboard isLoggedIn/>:
         (<>if(!isLoggedIn){
          <Navigate to ='/registration'/>
         }
         return <div>You are not Authorized</div>
         </>
         )
         }/>
         
        <Route exact path ="/showmylist" element ={isLoggedIn?<ShowMyList selectionModel/>:
         (<>if(!isLoggedIn){
          <Navigate to ='/registration'/>
         }
         return <div>You are not Authorized</div>
         </>
         )
         }/>
        </Routes>
      </Router>

    </div>
  </>
  )
}

export default App3