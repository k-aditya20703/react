import React from 'react';
import './event.css';
const EventHandling = () => {
    const handleClick = ()=>{
        alert('Hellow World')
    }
const handleInlineClick = (event)=>{
    console.log(event.target);
    alert('i Am Inline Fat Arrow Function')
}

const handlePassingArgument = (user)=>{
    console.log(`welcome ${user}`)
    alert(`Welcome ${user}`)
}
  return (
    <>
        <h1>Event Handling</h1>

        {/* OnClick EventListner [Named Function] */}

        <button className='event-btn' onClick={handleClick}>Click Me</button>

    <br></br>
        {/* Inline Fat Arrow Function */}

        <button className='event-btn' onClick={(event)=>handleInlineClick(event)}>Inline Fat Arrow Function</button>

        <br></br>
        {/* Inline Event Handler */}

        <button className='event-btn' onClick={()=> alert('I m inline eventHandler')} > Inline Event Handler</button>

        <br></br>
        {/* passing Argument */}

        <button className='event-btn' onClick={()=>handlePassingArgument("Aditya")}>Passing Argument</button>
    </>
  )
}

export default EventHandling
