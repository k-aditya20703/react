import React, { useEffect, useState } from 'react'
import './api.css'
const Api = () => {
const [apiData,setApiData] = useState([]);


useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=> res.json())
        .then((data) => {
            setApiData(data);
        })
    },[]);
return (
    <>
        <div className='card'>
            {
                apiData.map((postData)=>{
                    return(
                        <p>{postData.id}</p> ,
                    <p>{postData.title}</p>
                    )
                })
            }
        </div>
    </>
  )
}

export default Api
