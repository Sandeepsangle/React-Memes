import React, { useState } from "react";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
const Registration = () => {
  const [name, setName] = useState([]);
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !password) {
      setFlag(true);
      alert("please enter username and password");
    } else {
      setFlag(false);
      var details = JSON.parse(localStorage.getItem('details')||"[]")
      var detail={
          name:name,
          password:password
      }
      details.push(detail)
      localStorage.setItem("details",JSON.stringify(details))
      // setLogin(!login);
      setName('')
      setPassword('')
    }
  }
  function handleclick() {
    setLogin(!login);
  }
 
  return (
    <div>
      {login ? (
        <form style={{width:"400px"}}  onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={password}  
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block" >
            Register
          </button>
          <p onClick={handleclick}> Already Registered {name}, login in?</p>
        </form>
      ) : (
        <Login />
      )} 
    </div>
  );
};

export default Registration;
