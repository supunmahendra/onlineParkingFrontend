import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const[username,setUsernam] =useState('');
    const[password,setPassword] =useState('');
    const[error,setError] =useState('');

    const handleLogin =async (e)=>{
      e.preventDefault();

      try{
        const response =await fetch ('http://localhost:3005/api/users/login',{
        method: 'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,password})
      });
      const data =await response.json()
      console.log(data)

      if(response.ok){
        console.log(data);
      } else {
        throw new Error (data.message || "Login failed");
      }

      }catch(err){
        setError(err.message);
        console.log("Login error", err)
      }
    }

    //const navigate =useNavigate();
    //function handleMain(){
    // navigate("/main")
   // }

  return (
    <div className='sContainer'>
          <div className='searchContainer'>
            <h1 className='homeNoteLogin'>Username</h1>
            <div className='search'>
        
            <input type="text" id='searchInput' className='searchText' onChange={(e)=>setUsernam(e.target.value)} value={username}/>
            </div>
            <h1 className='homeNoteLogin'>Password</h1>
            <div className='search'>
        
            <input type="password" id='searchInput' className='searchText' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>

            <div className='btnMain'>
                <button className='btn' id='button' onClick={handleLogin} >Login</button>
                {error && <div>{error}</div>}
            </div>
        </div>
    </div>
  )
}

export default Login;