import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Where do you want to go?"
              className="form-control"
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
        <li>Icon</li>
        <li>Clouds</li>
        <li>Madrid</li>
        <li>Last updated: 10:45</li>
        <li>15°C</li>
        <li>Feels like: 15°</li>
      </ul>
      <div className="row justify-content-around">
        <div className="col-5 align-self-center ">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/003/original/wind.png?1616662071"
            alt="Wind icon"
            className="wind-humidity-icon"
          />
          <span id="wind">5 km/h</span>
        </div>
        <div className="col-4 align-self-center">
          {" "}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/006/004/original/humidity.png?1616662111"
            alt="Humidity icon"
            className="wind-humidity-icon"
          />
          <span id="humidity">10%</span>
        </div>
      </div>
    </div>
  );
}
