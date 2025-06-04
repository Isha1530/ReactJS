import {useEffect} from 'react';
import './App.css';


import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';

import {useWeather} from './context/Weather'
function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect (() =>{
    //get current location
    weather.fetchCurrentUserLocationData();

  },[])

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input />
      <Button onClick={weather.fetchWeather} value ="Search" />
      <Card />
      <Button onClick={weather.refreshWeather} value="Refresh" />
    </div>
  );
}

export default App;
