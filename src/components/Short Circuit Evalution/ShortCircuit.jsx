import React, { useState } from 'react'
import './shortcircuit.css'

const ShortCircuit = () => {
  const [isLogin,setIsLogin] = useState(false);
  const [isLogout,setIsLogout] = useState(false);

  const handleLogin = ()=>{
    setIsLogin(true);
    setIsLogout(false);

  }

  const handleLogout = ()=>{
    setIsLogin(false);
    setIsLogout(true);
  }
  return (
    <>
      <div className='ev-card'>
        <h1 className='header'>Short Circuit Evaluation</h1>
        <h3 className='header'> i'm User</h3>
        {isLogout &&<p className='user'>User Logged Out 🚶‍♂️🚶‍♂️🚶‍♂️</p>}
        {isLogin &&<p className='user'>User Logged in 🚶‍➡️🚶‍➡️🚶‍➡️</p>}
        <button onClick={handleLogin} className='log'>Login</button>
        <button onClick={handleLogout} className='log'>Log Out</button>
      </div>
    </>
  )
}

export default ShortCircuit

