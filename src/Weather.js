import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import LastUpdated from "./LastUpdated";

export default function Weather(props) {
  let [currentWeatherData, setCurrentWeatherData] = useState({ ready: false });
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

  if (currentWeatherData.ready) {
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
        <ul>
          <li className="icon-item pb-2">
            <img
              src="https://openweathermap.org/img/wn/currentWeatherData.icon@2x.png"
              alt="Current weather icon"
            />
          </li>
          <li className="weather-description pb-3 text-capitalize">
            {currentWeatherData.description}
          </li>
          <li>{currentWeatherData.cityName}</li>
          <li className="last-update pb-4">
            <LastUpdated time={currentWeatherData.lastUpdated} />
          </li>
          <li>{currentWeatherData.temperature}°C</li>
          <li>Feels like: {currentWeatherData.feelsLike}°</li>
        </ul>
        <div className="row justify-content-around  pt-5">
          <div className="col-5 align-self-center">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/003/original/wind.png?1616662071"
              alt="Wind icon"
              className="wind-humidity-icon"
            />
            <span id="wind">{currentWeatherData.wind} km/h</span>
          </div>
          <div className="col-4 align-self-center">
            {" "}
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/004/original/humidity.png?1616662111"
              alt="Humidity icon"
              className="wind-humidity-icon"
            />
            <span id="humidity">{currentWeatherData.humidity}%</span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bedfbe0fd1980c1b75bd73f4d5db9305";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => alert("I cannot find the city"));
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
