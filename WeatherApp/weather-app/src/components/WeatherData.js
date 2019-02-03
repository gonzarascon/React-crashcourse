import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

const WeatherData = () => (
  <div>
    <WeatherTemperature />
    <WeatherExtraInfo humidity={80} wind={"10 m/S"} />
  </div>
);

export default WeatherData;
