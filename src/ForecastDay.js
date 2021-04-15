import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function roundTemperature(num) {
    if (props.unit !== "celsius") {
      num = Math.round((num * 9) / 5 + 32);
    }
    return `${Math.round(num)}°`;
  }
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
          {roundTemperature(props.forecastData.temp.min)}
        </span>{" "}
        /{" "}
        <span className="Forecast-Max">
          {" "}
          {roundTemperature(props.forecastData.temp.max)}
        </span>
      </li>
    </ul>
  );
}
