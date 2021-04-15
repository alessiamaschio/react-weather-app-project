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
    <ul className="pb-2">
      <li className="Forecast-Day text-uppercase pb-2">{convertDay()}</li>
      <li className="Forecast-Item">
        <WeatherIcon iconCode={props.forecastData.weather[0].icon} size={32} />
      </li>
      <li className="Forecast-Min-Max Forecast-Item pt-2">
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
