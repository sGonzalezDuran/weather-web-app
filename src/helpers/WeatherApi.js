const api_key = 'ab278acdc2b7c8246d9adf64b8c9ada0';

export const getWeather = async(city) =>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const resp = await fetch(url);
    const weatherData = await resp.json();
    //console.log(weatherData.weather[0].description);
    
    const formattedWeatherData = {
        city: weatherData.name,
        country: weatherData.sys.country,
        temp: weatherData.main.temp,
        weather: weatherData.weather[0].description,
    };

    return formattedWeatherData;
}