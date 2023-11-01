import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";
import Dashboard from "./Dashboard";
const Login = () => {
  const [namelog, setNamelog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  let [mails, setMails] = useState();
  let [passwords, setPasswords] = useState();
  const [flag, setFlag] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const navigate = useNavigate()
  function handleClick(e) {
     e.preventDefault();
    if (!namelog || !passwordlog) {
      setFlag(true);
      console.log("Empty");
    } else {
      e.preventDefault();
      let mail = JSON.parse(localStorage.getItem("details"));
      let namee = mail.map((item) => {
        if ((item.name === namelog) & (item.password === passwordlog)) {
          setMails(item.name);
          localStorage.setItem("name",JSON.stringify(item.name))
          setPasswords(item.password);
          // localStorage.setItem("item.name")
          console.log("match")
        }else if (passwordlog !== passwords || namelog !== mails)
        {
          console.log("please enter valid Username or Password")
        }
        setDashboard(!dashboard);
        setFlag(false);
      });
    }
  }
  return (
    <>
      {dashboard ? (
        <form  style={{width:"400px"}}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              value={namelog}
              onChange={(event) => setNamelog(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              value={passwordlog}
              onChange={(event) => setPasswordlog(event.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            onClick={handleClick}
          >
            Login
          </button>
          {/* {flag && (
            <Alert color="primary" variant="danger">
              Please fill Correct Info
            </Alert>
          )} */}
        </form>
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default Login;
