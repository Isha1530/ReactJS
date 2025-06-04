import React from "react";
import { useWeather } from '../context/Weather'

const Card = () => {
  const { weather } = useWeather();

  if (!weather) return null; // avoid rendering if no weather yet

  return (
    <div className="card">
      <img src={weather.current?.condition?.icon} alt="condition icon" />
      <h2>{weather.current?.temp_c}°C</h2>
      <h5>{weather.location?.name}, {weather.location?.region}, {weather.location?.country}</h5>
    </div>
  );
};

export default Card;
