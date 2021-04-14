import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast pt-5">
      <ul>
        <li className="Forecast-Day">Day</li>
        <li>
          <WeatherIcon iconCode="000" />
        </li>
        <li className="Forecast-Min-Max">
          <span className="Forecast-Min">10°</span> /{" "}
          <span className="Forecast-Max">20°</span>
        </li>
      </ul>
    </div>
  );
}
