import React from 'react'
import './prop.css'

const Parents = () => {

    const handleClick = ()=>{
        alert('Thank You For Clicking Me🙏🙏🙏')
    }

    const handleMouseHover = ()=>{
        alert('Thank you for Hover Me❤️❤️❤️')
    }
  return (
    <>
        <Child onClick={handleClick} onMouseEnter={handleMouseHover}/>
    </>
  )
}

export default Parents


const Child = (props)=>{
    return(
        <>
        <button className='prop-btn' onClick={props.onClick}>Click Me</button>
        <button className='prop-btn' onMouseEnter={props.onMouseEnter}>Hover Me</button>
        </>
    )
}
