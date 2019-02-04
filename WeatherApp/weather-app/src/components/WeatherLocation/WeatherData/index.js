import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

import { RAIN } from "./../../../constants/weathers";
import "./styles.css";

const WeatherData = () => (
  <div className="weatherDataCont">
    <WeatherTemperature temperature={20} weatherState={RAIN} />
    <WeatherExtraInfo humidity={80} wind={"10 m/S"} />
  </div>
);

export default WeatherData;
