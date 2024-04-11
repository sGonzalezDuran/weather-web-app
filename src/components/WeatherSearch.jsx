import { useState } from "react";

export const WeatherSearch = ({onAddCity}) => {
  const [city, setCity] = useState('');
  const onCityChange = (event) =>{
    setCity(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (city.trim().length <=1) return;
    onAddCity(city)
    setCity(' ');
  };
  return (
    <div className="search-container">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="City" onChange={onCityChange} value={city}/>
      </form>
    </div>
  );
};
