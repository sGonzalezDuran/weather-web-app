import { WeatherSearch } from "./WeatherSearch"
import { WeatherCards } from "./cards/WeatherCards"
import { useState } from "react";

export const WeatherApp = () => {
  const [city, setCity] = useState('Chillan');

  const onAddCity = (search) =>{
    setCity(search)
  }
  return (
    <div className="container">  
        <h1>Weather App</h1>
        <WeatherSearch onAddCity={onAddCity}/>
        <WeatherCards city={city}/>
    </div>
  )
}
