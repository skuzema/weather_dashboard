function WeatherCard({ city, weather }) {
  if (!weather) return null;

  const { temperature, windspeed, weathercode } =
    weather.current_weather;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p className="weather-value">🌡 Temperature: {temperature} °C</p>
      <p className="weather-value">💨 Wind speed: {windspeed} km/h</p>
      <p className="weather-value">🔢 Weather code: {weathercode}</p>
    </div>
  );
}

export default WeatherCard;
