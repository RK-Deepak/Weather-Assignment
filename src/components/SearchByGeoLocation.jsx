import React, { useEffect, useState } from 'react';
import apiConnector from '../utils/apiConnector';

import InfoCard from './InfoCard';

const SearchByGeoLocation = () => {
   
    const [coordinates, setCoordinates] = useState(null);
    const [weatherInfo, setWeatherInfo] = useState(null);

    const fetchCoordinates = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log("Latitude:", latitude);
                console.log("Longitude:", longitude);
                setCoordinates([latitude, longitude]);
        localStorage.setItem("coords", JSON.stringify(coordinates));
            }, (error) => {
                // Error: Handle the error
                console.error("Error getting user's location:", error.message);
            });
        } else {
            prompt("GeoLoaction is not available");
        }
    }

    useEffect(() => {
        fetchCoordinates();
    }, []);

    useEffect(() => {
        const fetchWeather = async () => {
   
            try {
                if (coordinates) {
                    const result = await apiConnector("", coordinates);
                    console.log(result);
                    setWeatherInfo(result);
                }
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        }

        fetchWeather();
    }, [coordinates]);
   
    if(weatherInfo==null)
    {
        return(
            <div className='loader'>
                
            </div>
        )
    }

    return (
        <InfoCard weatherInfo={weatherInfo}/>

    
    );
}

export default SearchByGeoLocation;
