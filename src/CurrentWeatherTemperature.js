import React, { useState } from "react";
import "./CurrentWeatherTemperature.css";

export default function CurrentWeatherTemperature(props) {
  // let [unit, setUnit] = useState(`celsius`);

  function displayFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahreheit");
  }
  function displayCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function convertToFahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  function convertFahrenheit() {
    return Math.round((props.feels * 9) / 5 + 32);
  }

  if (props.unit === `celsius`) {
    return (
      <div>
        <span>{Math.round(props.celsius)}</span>
        <span className="celsius">°C</span>
        <span className="vertical-bar"></span>
        <span className="fahrenheit">
          <a className="unit-link" href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
        <div className="feels-like">Feels like: {props.feels}°</div>
      </div>
    );
  } else {
    return (
      <div>
        <span>{convertToFahrenheit()}</span>
        <span className="celsius">
          <a className="unit-link" href="/" onClick={displayCelsius}>
            °C
          </a>
        </span>
        <span className="vertical-bar"></span>
        <span className="fahrenheit">°F</span>
        <div className="feels-like">Feels like: {convertFahrenheit()}°</div>
      </div>
    );
  }
}
