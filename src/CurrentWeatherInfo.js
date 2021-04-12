import React from "react";
import LastUpdated from "./LastUpdated";

export default function CurrentWeatherInfo(props) {
  return (
    <div className="CurrentWeatherInfo">
      <ul>
        <li className="icon-item pb-2">
          <img
            src="https://openweathermap.org/img/wn/currentWeatherData.icon@2x.png"
            alt="Current weather icon"
          />
        </li>
        <li className="weather-description pb-3 text-capitalize">
          {props.weatherInfo.description}
        </li>
        <li>{props.weatherInfo.cityName}</li>
        <li className="last-update pb-4">
          <LastUpdated time={props.weatherInfo.lastUpdated} />
        </li>
        <li>{props.weatherInfo.temperature}°C</li>
        <li>Feels like: {props.weatherInfo.feelsLike}°</li>
      </ul>
      <div className="row justify-content-around  pt-5">
        <div className="col-5 align-self-center">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/003/original/wind.png?1616662071"
            alt="Wind icon"
            className="wind-humidity-icon"
          />
          <span id="wind">{props.weatherInfo.wind} km/h</span>
        </div>
        <div className="col-4 align-self-center">
          {" "}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/004/original/humidity.png?1616662111"
            alt="Humidity icon"
            className="wind-humidity-icon"
          />
          <span id="humidity">{props.weatherInfo.humidity}%</span>
        </div>
      </div>
    </div>
  );
}
