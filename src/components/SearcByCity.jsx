import React, { useEffect, useState} from 'react';
import apiConnector from "../utils/apiConnector"

import InfoCard from './InfoCard';
const SearcByCity = () => {
    const [SearcByCity,setSearchByCity]=useState("");
     const [weatherInfo, setWeatherInfo] = useState(null);
     
   
        const fetchWeather = async () => {
          
            try {
               
                    const result = await apiConnector(SearcByCity);
                    console.log(result);
                    setWeatherInfo(result);
                   
                
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        
        }
        
   
   

    function submitHandler(e)
    {
e.preventDefault();
fetchWeather();
    }


   
    
  
   
  return (
    <div className='form_outer'>
        
        <form onSubmit={submitHandler} className='form'>
<input type='text' value={SearcByCity} onChange={(e)=>setSearchByCity(e.target.value)} placeholder='Enter City..'/>
</form>

<InfoCard weatherInfo={weatherInfo}/>
    
    

    </div>
  )
}

export default SearcByCity