import { Routes, Route } from 'react-router-dom';
import React from 'react';
import "./App.css"
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Watch from './pages/Watch.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <>
      <Navbar /> {/* Navbar will show on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="*" element={<Home />} />
      

        
      </Routes>
    </>
  );
}

export default App;