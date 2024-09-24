import React, { useState } from 'react'
function Weather() {
    const [city,setCity]=useState();
    const [weatherData, setWeatherData] = useState(null);
        
    const fetching= async()=>{
        const apiKey = 'c47793112978f57f429335857d70c1e1'; // Your actual API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

          const response=  await fetch(url);
          const data=  await response.json();
          setWeatherData(data)
          console.log(data)
    }





const handleweather=(e)=>{
setCity(e.target.value)
    }




  return (

    <div className='container'>

    <input  type='text' placeholder='enter city'  value={city} onChange={handleweather} />
    {weatherData && ( <div>
                    <h3>Weather in {weatherData.name}</h3>
                    <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p> {/* Convert from Kelvin to Celsius */}
                    <p>Weather: {weatherData.weather[0].description}</p>
                </div> )}

        

    <button onClick={fetching}>Get weather</button>
    </div>
  )
}

export default Weather
