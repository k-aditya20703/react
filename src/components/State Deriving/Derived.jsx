import React, { useState } from 'react'
import './derived.css'
const Derived = () => {

    const [users,setUsers] = useState([
        {name : 'Roman',age : 33},
        {name : 'Seth',age : 23},
        {name : 'Dean',age : 29}
    ])


// ************************************************************************************************
// When a State Completely Depend upon an another State , then this state is called DERIVED STATE .
// Derived State
    const userCount = users.length;
    const averageAge = users.reduce((accum,curEle)=> accum + curEle.age , 0) /userCount;
// Derived State
// When a State Completely Depend upon an another State , then this state is called DERIVED STATE .
// ************************************************************************************************


  return (
    <>
      <ul>
        {
          users.map((user)=>{
            return(
            <li>
              {user.name} - {user.age} years old
            </li>
            )
          })
        }
      </ul>
            <p>Total User : {userCount}</p>
            <p>Average age : {averageAge}</p>     
    </>
  )
}

export default Derived
