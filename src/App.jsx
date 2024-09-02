import './App.css';
import React from "react";
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;
