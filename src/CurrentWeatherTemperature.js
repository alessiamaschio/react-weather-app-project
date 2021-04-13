import React, { useState } from "react";
import "./CurrentWeatherTemperature.css";

export default function CurrentWeatherTemperature(props) {
  let [unit, setUnit] = useState(`celsius`);
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
  }
  function displayCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }

  function convertToFahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === `celsius`) {
    return (
      <div>
        <span>{props.celsius}</span>
        <span className="celsius">°C</span>
        <span className="vertical-bar"></span>
        <span className="fahrenheit">
          <a className="unit-link" href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
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
      </div>
    );
  }
}
