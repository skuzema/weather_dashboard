import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import CitySelector from "./components/CitySelector";
import WeatherCard from "./components/WeatherCard";
import TemperatureChart from "./components/TemperatureChart";
import { getWeather } from "./services/weather";

function App() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCitySelect = async (cityData) => {
    if (!cityData) return;

    setCity(cityData.name);
    setLoading(true);
    setError(null);

    try {
      const data = await getWeather(cityData.lat, cityData.lon);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <CitySelector onSelect={handleCitySelect} />

      {loading && <p className="loading">Loading weather data...</p>}
      {error && <p className="error">{error}</p>}

      <WeatherCard city={city} weather={weather} />

      {weather?.daily && (
        <TemperatureChart daily={weather.daily} />
      )}
    </div>
  );
}

export default App;
