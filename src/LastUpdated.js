import React from "react";

export default function LastUpdated(props) {
  console.log(props.time);
  let hours = props.time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span>
      Last updated: {hours}:{minutes}
    </span>
  );
}
