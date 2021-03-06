import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  switch (props.iconCode) {
    case "01d":
      return (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#f9ed69"
          size={props.size}
          animate={true}
        />
      );

    case "01n":
      return (
        <ReactAnimatedWeather
          icon="CLEAR_NIGHT"
          color="#2d4059"
          size={props.size}
          animate={true}
        />
      );

    case "02d":
    case "03d":
      return (
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="#3490de"
          size={props.size}
          animate={true}
        />
      );

    case "02n":
    case "03n":
      return (
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_NIGHT"
          color="#126e82"
          size={props.size}
          animate={true}
        />
      );

    case "04d":
    case "04n":
      return (
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="#364f6b"
          size={props.size}
          animate={true}
        />
      );

    case "09d":
    case "09n":
    case "10d":
    case "10n":
    case "11d":
    case "11n":
      return (
        <ReactAnimatedWeather
          icon="RAIN"
          color="#48466d"
          size={props.size}
          animate={true}
        />
      );

    case "13d":
    case "13n":
      return (
        <ReactAnimatedWeather
          icon="SNOW"
          color="#769fcd"
          size={props.size}
          animate={true}
        />
      );

    case "50d":
    case "50n":
      return (
        <ReactAnimatedWeather
          icon="FOG"
          color="#b9d7ea"
          size={props.size}
          animate={true}
        />
      );

    default:
      return (
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/007/124/original/unicorn.png?1618388153"
          alt="unicorn"
          width={props.size}
        />
      );
  }
}
