import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  console.log(props);
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Forecast pt-5">
        <ForecastDay forecastData={forecastData[0]} />
      </div>
    );
  } else {
    let apiKey = "bedfbe0fd1980c1b75bd73f4d5db9305";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
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
    return null;
  }
}
