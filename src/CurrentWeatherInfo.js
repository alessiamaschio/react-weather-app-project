import React from "react";
import LastUpdated from "./LastUpdated";
import WeatherIcon from "./WeatherIcon";
import CurrentWeatherTemperature from "./CurrentWeatherTemperature";
import "./CurrentWeatherInfo.css";

export default function CurrentWeatherInfo(props) {
  return (
    <div className="CurrentWeatherInfo">
      <ul>
        <li className="icon-item pb-2">
          <WeatherIcon iconCode={props.weatherInfo.icon} size={64} />
        </li>
        <li className="weather-description pb-3 text-capitalize">
          {props.weatherInfo.description}
        </li>
        <li className="city-name text-uppercase">
          {props.weatherInfo.cityName}
        </li>
        <li className="last-update pb-3">
          <LastUpdated time={props.weatherInfo.lastUpdated} />
        </li>
        <li className="current-temperature">
          <CurrentWeatherTemperature
            celsius={props.weatherInfo.temperature}
            feels={props.weatherInfo.feelsLike}
            unit={props.unit}
            setUnit={props.setUnit}
          />
        </li>
      </ul>
      <div className="row justify-content-around  pt-1">
        <div className="col-5 align-self-center">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/003/original/wind.png?1616662071"
            alt="Wind icon"
            className="wind-humidity-icon mr-1"
          />
          <span id="wind">{props.weatherInfo.wind} km/h</span>
        </div>
        <div className="col-4 align-self-center">
          {" "}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/004/original/humidity.png?1616662111"
            alt="Humidity icon"
            className="wind-humidity-icon mr-1"
          />
          <span id="humidity">{props.weatherInfo.humidity}%</span>
        </div>
      </div>
    </div>
  );
}
