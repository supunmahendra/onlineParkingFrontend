import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import { Navbar } from './components/Navbar';
import Home from './components/Home';
import Main from './components/Main';
import Login from './components/Login';



import './App.css'

function App() {
  

  return (
    <>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
          </Routes>

          <div className='foot'>
          <p> © Copyright Supun Mahendra || All Rights Reserved</p>

        </div>
    </>
  );
}

export default App
