import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Navbar =()=>{

    const navigate =useNavigate();
    function handleLogin(){
        navigate("/")
    }

    return(
        <nav className='navbar'>
        <span className='home' onClick={handleLogin}>Opark</span>
        <div>
        park <span>MY </span>car
        </div>
        </nav>
    )
}