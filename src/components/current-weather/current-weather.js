import "./current-weather.css";

const CurrentWeather = ({ data }) => {

  const today = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const todayDay = daysOfWeek[today.getDay()];
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="today-day">{todayDay}</p>
          
          <p className="city">{data.city}</p>
          <p className="weather-description"> {data.weather[0].description} </p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label  det">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels_Like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
