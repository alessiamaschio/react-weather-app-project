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

  function convertHour() {
    let date = new Date(props.forecastData.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return (
      <span>
        {hours}:{minutes}
      </span>
    );
  }
  return (
    <ul className="pb-2">
      <li className="Forecast-Day text-uppercase pb-2">{convertHour()}</li>
      <li className="Forecast-Item">
        <WeatherIcon iconCode={props.forecastData.weather[0].icon} size={32} />
      </li>
      <li className="Forecast-Item pt-2">
        <span className="Forecast-temp">
          {roundTemperature(props.forecastData.temp)}
        </span>{" "}
      </li>
    </ul>
  );
}
