import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function CurrentWeatherIcon(props) {
  switch (props.iconCode) {
    case "01d":
      return (
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#f9ed69"
          size={62}
          animate={true}
        />
      );

    case "01n":
      return (
        <ReactAnimatedWeather
          icon="CLEAR_NIGHT"
          color="#2d4059"
          size={62}
          animate={true}
        />
      );
      break;
    case "02d":
    case "03d":
      return (
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="#3490de"
          size={62}
          animate={true}
        />
      );
      break;
    case "02n":
    case "03n":
      return (
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_NIGHT"
          color="#071a52"
          size={62}
          animate={true}
        />
      );
      break;
    case "04d":
    case "04n":
      return (
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="#364f6b"
          size={62}
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
          color="#48466d"
          size={62}
          animate={true}
        />
      );
      break;

    case "13d":
    case "13n":
      return (
        <ReactAnimatedWeather
          icon="SNOW"
          color="#769fcd"
          size={62}
          animate={true}
        />
      );
      break;
    case "50d":
    case "50n":
      return (
        <ReactAnimatedWeather
          icon="FOG"
          color="#b9d7ea"
          size={62}
          animate={true}
        />
      );
      break;
    default:
      return <img src="./images/unicorn.png" alt="unicorn" />;
  }
}
