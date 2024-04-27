import axios from 'axios';
const apiConnector=async(city,coordinates)=>
{
    let result=null;
    console.log("hI I M",city,coordinates);

    const params=city?{
        location: city,
        format: 'json',
        u: 'f'
      }:{
        lat: coordinates[0],
        long: coordinates[1],
        format: 'json',
        u: 'f'
      }

     const options = {
      method: 'GET',
      url: 'https://yahoo-weather5.p.rapidapi.com/weather',

      params,
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_KEY,
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
        result=response.data;
    } catch (error) {
        console.error(error);
    }
    return result;
}
export default apiConnector;
