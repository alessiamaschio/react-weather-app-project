import React from "react";
import axios from "axios";
import swal from "sweetalert";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "bedfbe0fd1980c1b75bd73f4d5db9305";
  let lon = props.coords.lon;
  let lat = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios
    .get(apiUrl)
    .then(handleResponse)
    .catch(() =>
      swal({
        title: "I cannot find the city...",
        text: "Are you sure you typed the city name correctly? 😉",
        icon: "error",
        button: "Try again!",
      })
    );
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
