import React from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import "./styles.css";

const renderForecastItemDays = forecastData => {
  return forecastData.map(forecast => (
    <ForecastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}
    />
  ));
};

const renderProgress = () => {
  return <h3>cargando pronostico extendido</h3>;
};

const ForecastExtendend = ({ city, forecastData }) => (
  <div>
    <h2 className="forecast-title">Pronostico Extendido {city}</h2>
    {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
  </div>
);

ForecastExtendend.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
};

export default ForecastExtendend;
