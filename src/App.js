import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { auth } from "./firebase";
import "./App.css";
import ActiveUsers from "./Components/Navbar/ActiveUsers";
import { LoginUsers } from "./Components/Login users/LoginUsers";


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home name={userName} />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/active" element={<ActiveUsers/>} />
          <Route path="/loginusers" element={<LoginUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
