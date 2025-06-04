import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";
export const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};
export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchWeather = async () => {
    if (!searchCity) return;
    try {
      const response = await getWeatherDataForCity(searchCity);
      setWeather(response);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  const fetchCurrentUserLocationData = async () => {
    navigator.geolocation.getCurrentPosition((postition) =>
      getWeatherDataForLocation(
        postition.coords.latitude,
        postition.coords.longitude
      ).then(weather => setWeather(weather))
    );
  };


  const refreshWeather = async () => {
    setWeather(null);           // Clear old data
    await fetchWeather();       // Fetch again
  };

  return (
    <WeatherContext.Provider
      value={{ searchCity, weather, fetchWeather, setSearchCity ,fetchCurrentUserLocationData,refreshWeather}}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
