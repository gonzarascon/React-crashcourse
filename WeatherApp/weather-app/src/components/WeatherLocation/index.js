import React from "react";
// import PropTypes from "prop-types";

import Location from "./Location";
import WeatherData from "./WeatherData";

const WeatherLocation = () => (
  <div>
    <Location city={"Santiago"} />
    <WeatherData />
  </div>
);
export default WeatherLocation;
