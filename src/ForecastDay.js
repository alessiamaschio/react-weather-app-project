import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function convertDay() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <ul>
      <li className="Forecast-Day">{convertDay()}</li>
      <li>
        <WeatherIcon iconCode={props.forecastData.weather[0].icon} size={32} />
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
