import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';


const IndexFn = () => {

    const [currentSection,setcurrentSection]=useState("Home");
    const navigate=useNavigate();

    const changeSection=(e)=>{
        setcurrentSection(e.target.textContent);
        
        if(e.target.textContent==="Home")
        {
            navigate("/");
        }
        else if(e.target.textContent==="Search")
        {
            navigate("/citySearch");
        }
      
    }

    useEffect(()=>
{ 
    if(currentSection==="Home")
    {
        navigate("/");
    }
    else if(currentSection==="Search")
    {
        navigate("/citySearch");
    }
},[])

  
  return (
    <div className='indexPart'>
        <div className='button_part'>
            <button className='btn btn1' onClick={changeSection}>Home</button>
            <button className='btn btn2' onClick={changeSection}>Search</button>
        </div>
        {currentSection==="Home"? <h1>Searched By Geo Location</h1>:<h1>Search By City</h1>}
        <Outlet/>

    </div>
  )
}

export default IndexFn;