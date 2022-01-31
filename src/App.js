import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/signin" element={<SignIn/>}/>
       <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
