import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import { RAIN } from "./../../../constants/weathers";

const WeatherData = () => (
  <div>
    <WeatherTemperature temperature={20} weatherState={RAIN} />
    <WeatherExtraInfo humidity={80} wind={"10 m/S"} />
  </div>
);

export default WeatherData;
