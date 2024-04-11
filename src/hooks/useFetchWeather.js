import { useEffect, useState } from "react";
import { getWeather } from "../helpers/WeatherApi";

export const useFetchWeather = (city) => {
     const [clima, setClimas] = useState({});
     const [isLoading, setIsLoading] = useState(true);

     const getClima = async () => {
        const newClima = await getWeather(city);
        setClimas(newClima);
        setIsLoading(false);
     };
     useEffect(() => {
        getClima();
     }, [clima]);

     return{
        clima: clima,
        isLoading: isLoading,
        getClima: getClima
     };
};