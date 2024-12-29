import React, { useState } from 'react'
import './toggle.css'
const Toggle = () => {
    const [isOn,setIsOn] = useState(false)

    const handleToggle = ()=>{
        setIsOn(!isOn);
    }

  return (
    <>
        <div className='toggle' onClick={handleToggle} style={{backgroundColor : isOn? '#ffffff' : 'rgb(175, 175, 175)' }}>
            <div className={`toggle-btn ${isOn? 'ON' : 'OFF'}`}>
                <p>{isOn? 'ON' : 'OFF'}</p>
            </div>
        </div>
    </>
  )
}

export default Toggle
