import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function CurrentWeatherIcon(props) {
  switch (props.iconCode) {
    case "01d":
      return (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="red"
          size={42}
          animate={true}
        />
      );

    case "01n":
      return (
        <ReactAnimatedWeather
          icon="CLEAR_NIGHT"
          color="black"
          size={42}
          animate={true}
        />
      );
      break;
    case "02d":
    case "03d":
      return (
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="blue"
          size={42}
          animate={true}
        />
      );
      break;
    case "02n":
    case "03n":
      return (
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_NIGHT"
          color="black"
          size={42}
          animate={true}
        />
      );
      break;
    case "04d":
    case "04n":
      return (
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="black"
          size={42}
          animate={true}
        />
      );
      break;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
    case "11d":
    case "11n":
      return (
        <ReactAnimatedWeather
          icon="RAIN"
          color="black"
          size={42}
          animate={true}
        />
      );
      break;

    case "13d":
    case "13n":
      return (
        <ReactAnimatedWeather
          icon="SNOW"
          color="black"
          size={42}
          animate={true}
        />
      );
      break;
    case "50d":
    case "50n":
      return (
        <ReactAnimatedWeather
          icon="FOG"
          color="black"
          size={42}
          animate={true}
        />
      );
      break;
    default:
      return <img src="./images/unicorn.png" alt="unicorn" />;
  }
}
