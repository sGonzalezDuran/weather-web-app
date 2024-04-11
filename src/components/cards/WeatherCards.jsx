import { WeatherLocation } from "./WeatherLocation"
import {WeatherTemp} from "./WeatherTemp"
import {WeatherDescription} from "./WeatherDescription"
import {useFetchWeather} from "../../hooks/useFetchWeather"
import { WeatherIcon } from "./WeatherIcon"

export const WeatherCards = ({city}) => {
  const {clima, isLoading} = useFetchWeather(city);
  return (
    <div className="weather-card">
      {
        isLoading && (<h2> Cargando...</h2>)
      }
      <WeatherLocation ciudad={clima.city} pais={clima.country}/>
      <WeatherIcon clima={clima.weather}/>
      <WeatherTemp temp={clima.temp}/>
      <WeatherDescription clima={clima.weather}/>
    </div>
  )
}
