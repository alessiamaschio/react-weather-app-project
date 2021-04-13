import React, { useState } from "react";

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
        <span>°C</span>
        <span className="vertical-bar"></span>
        <span>
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span>{convertToFahrenheit()}</span>
        <span>
          <a href="/" onClick={displayCelsius}>
            °C
          </a>
        </span>
        <span className="vertical-bar"></span>
        <span>°F</span>
      </div>
    );
  }
}
