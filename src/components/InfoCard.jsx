
import { IoLocationSharp} from "react-icons/io5";
import { WiSunrise, WiSunset } from "react-icons/wi";
import convertUnixTimestampToReadableDate from '../utils/DateConvertor';



const InfoCard = ({weatherInfo}) => {
    if (!weatherInfo) {
        return <div className='loader'></div>; // Render loader or placeholder if weatherInfo is missing
    }
  return (

    <div>
        {weatherInfo ?<div className="container">
       
       <div className="weather-info">
           
           <div className="location-info">
               <IoLocationSharp style={{color:"green", fontSize:"25px"}}/>
                <div className='locality'>
               <span className="city">{weatherInfo?.location?.city},</span>
               <span className="region">{weatherInfo?.location?.region ? weatherInfo?.location?.region:""}</span>
               <span className="country">{weatherInfo?.location?.country}</span>
               </div>
           </div>
           <div className="astronomy">
               
                   <div className='asto'>
                   <WiSunrise style={{fontSize:"25px", color:"yellow"}}/>
                   <span>{weatherInfo && weatherInfo.current_observation.astronomy.sunrise}</span>
                   </div>
                   <div className='asto'>
                   <WiSunset style={{fontSize:"25px", color:"yellowgreen"}}/>
                
                   <span>{weatherInfo && weatherInfo.current_observation.astronomy.sunset}</span>
                   </div>
               

           </div>
           <div className="atmos">
    <div className='info'><span>Humidity:</span> <span className="bold">{weatherInfo && <span>{weatherInfo.current_observation.atmosphere.humidity}%</span>}</span></div>
    <div className='info'><span>Visibility:</span> <span className="bold">{weatherInfo && <span>{weatherInfo.current_observation.atmosphere.visibility} miles</span>}</span></div>
    <div className='info'><span>Temp:</span> <span className="bold">{weatherInfo && <span>{Math.floor((weatherInfo.current_observation.condition.temperature -32)*5/9)}°C</span>}</span></div>
    <div className='info'><span>Speed:</span> <span className="bold">{weatherInfo && <span>{weatherInfo.current_observation.wind.speed} m/h</span>}</span></div>
</div>

           <h1 className='weather-Foreact_headline'>Weather ForeCast</h1>
           <div className="forecast">
              
               {weatherInfo && weatherInfo.forecasts.map((forecastItem, index) => {
                   return (
                       <div key={index}>
                           <span>{convertUnixTimestampToReadableDate(forecastItem.date)} {forecastItem.day}</span>
                           <span>{forecastItem.text}</span>
                           <span>High:{Math.floor((forecastItem.high-32)*5/9)}°C</span>
                           <span>Low:{Math.floor((forecastItem.low-32)*5/9)}°C</span>
                       </div>
                   )
               })}
           </div>
       </div>
   </div>:<div className='loader'></div>}
    </div>
  )
}

export default InfoCard