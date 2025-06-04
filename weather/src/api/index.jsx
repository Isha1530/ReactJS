const baseURL = 'http://api.weatherapi.com/v1/current.json?key=18f67204b97241abb14163416251403'

export const getWeatherDataForCity = async (cityName) => {
    const response = await fetch(`${baseURL}&q=${cityName}&aqi=yes`);
    const data = await response.json();
    return data;
};

export const getWeatherDataForLocation = async (lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    const data = await response.json();
    return data;
};