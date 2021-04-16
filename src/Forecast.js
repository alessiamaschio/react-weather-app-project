import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  function apiCall() {
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
  }

  if (ready) {
    return (
      <div className="Forecast pt-5">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div key={index}>
                <ForecastDay forecastData={dailyForecast} unit={props.unit} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    apiCall();
    return null;
  }
}
