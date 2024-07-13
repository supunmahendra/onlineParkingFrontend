import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate =useNavigate();
    function handleMain(){
        navigate("/main")
    }

  return (
    <div className='sContainer'>
          <div className='searchContainer'>
            <h1 className='homeNoteLogin'>Username</h1>
            <div className='search'>
        
            <input type="text" id='searchInput' className='searchText'/>
            </div>
            <h1 className='homeNoteLogin'>Password</h1>
            <div className='search'>
        
            <input type="password" id='searchInput' className='searchText'/>
            </div>

            <div className='btnMain'>
                <button className='btn' id='button' onClick={handleMain}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login