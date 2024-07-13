import React from 'react'
import { useNavigate } from 'react-router-dom';

import pic from '../assets/parking.png';


export const Home =()=>{

    const navigate =useNavigate();
    function handleLogin(){
        navigate("/login")
    }
  
    return(
        <div>
            <div className='welcomeContainer'>
                <div>
                    <img className='imageContainer' src={pic} alt="Parking" />
                </div>
                <div>
                    
                    <h1 className='homeWelcome' >Welcome!</h1>
                    <h1 className='homeNote'>Check the availability of parking slots in real-time, so you never have to worry about finding a spot.</h1>
                </div>

            </div>

            <div className='loginBtn'> 
            <button className='btnL' id='button' onClick={handleLogin}>Login</button>

            </div>
            
        </div>
    )
}

export default Home