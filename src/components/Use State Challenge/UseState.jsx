import React, { useState } from 'react'
import './usestate.css'

const UseState = () => {
    const [value,setValue] = useState(0);
    const [step,setStep] = useState (null);
    const handlePlus = ()=>{
        setValue(value + step);
    }

    const handleMinus = ()=>{
        setValue(value-step);
    }

     const handleReset = ()=>{
        setValue(0);
        setStep(0);
     }

    const handleNumber = (event)=>{
        setStep(Number(event.target.value))
    }
  return (
    <>
        <div className='card-header'>
            <h2 className='heading'>REACT COUNTER</h2>
            <p className='value'> {value} </p>
            <input value={step} onChange={handleNumber} type='number' placeholder='Enter a Number'></input>
            <div className='btn'>
            <button onClick={handlePlus} disabled={value >= 1000} className='btn-plus'>Increment</button>
            <button onClick={handleMinus} disabled={value <= 0} className='btn-minus'>Decrement</button>
            <button onClick={handleReset} className='btn-reset'>Reset</button>
            </div>
            <div className='footer'>
            <p>This project used conditional increment & conditional decrement button</p>
            <p>This project disabled buttons by conditionally</p>
            </div>
        </div>
    </>
  )
}

export default UseState
