import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import CurrentWeatherInfo from "./CurrentWeatherInfo";

export default function Weather(props) {
  let [currentWeatherData, setCurrentWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.city);
  function handleResponse(response) {
    console.log(response.data);
    setCurrentWeatherData({
      ready: true,
      cityName: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      lastUpdated: new Date(response.data.dt * 1000),
    });
  }
  function search() {
    let apiKey = "bedfbe0fd1980c1b75bd73f4d5db9305";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => alert("I cannot find the city"));
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  if (currentWeatherData.ready) {
    return (
      <div className="Weather pt-5 pb-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                autoFocus="on"
                placeholder="How is the weather in..."
                className="form-control d-inline-block text-truncate"
                onChange={handleCityInput}
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-dark"
              />
            </div>
          </div>
        </form>
        <CurrentWeatherInfo weatherInfo={currentWeatherData} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                autoFocus="on"
                placeholder="How is the weather in..."
                className="form-control d-inline-block text-truncate"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-dark"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
