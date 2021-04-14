import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  return (
    <ul>
      <li className="Forecast-Day">{props.forecastData.dt}</li>
      <li>
        <WeatherIcon iconCode={props.forecastData.weather[0].icon} />
      </li>
      <li className="Forecast-Min-Max">
        <span className="Forecast-Min">
          {Math.round(props.forecastData.temp.min)}°
        </span>{" "}
        /{" "}
        <span className="Forecast-Max">
          {Math.round(props.forecastData.temp.max)}°
        </span>
      </li>
    </ul>
  );
}
