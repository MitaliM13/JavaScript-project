import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  
  const apiKey = '35c3393dd432a72883a3a9a7e9e12be5';

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const displayWeatherData = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          City: {city}
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C
        </p>
        <p className="text-lg text-gray-700 mb-2">
          Wind Speed: {weather.wind.speed} m/s
        </p>
        <p className="text-lg text-gray-700 mb-2">
          Visibility: {weather.visibility} meters
        </p>
        <p className="text-lg text-gray-700">
          Weather: {weather.weather[0].description}
        </p>
      </div>
    );
  };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(`Network Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError('Error fetching data. Please try again later.');
    }
  };

  const handleSubmit = () => {
    if (!city.trim()) {
      alert('Please enter a city');
    } else {
      fetchWeatherData();
    }
  };

  return (
    <div className="container border-2 border-black mx-auto flex flex-col m-8 shadow-md shadow-purple-700  justify-center items-center p-4 bg-gradient-to-r from-purple-400 to-blue-400">
      <h1 className="font-bold text-4xl text-white mb-6">Weather App</h1>
      
      <div className="mb-6">
        <input 
          id="text"
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter City"
          className="px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button 
          id="btn" 
          onClick={handleSubmit}
          className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-500 transition"
        >
          Get Weather
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {weather && displayWeatherData()}
    </div>
  );
};

export default Weather;
