import React, { Component } from "react";
import PropTypes from "prop-types";

import ForecastItem from "./ForecastItem";
import "./styles.css";

const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
];

const data = {
  temperature: 10,
  humidity: 10,
  weatherState: "normal",
  wind: "20"
};

class ForecastExtendend extends Component {
  renderForecastItemDays() {
    return days.map(day => (
      <ForecastItem key={day} weekDay={day} hour={"10"} data={data} />
    ));
  }

  render() {
    const { city } = this.props;
    return (
      <div>
        <h2 className="forecast-title">Pronostico Extendido {city}</h2>
        {this.renderForecastItemDays()}
      </div>
    );
  }
}

ForecastExtendend.propTypes = {
  city: PropTypes.func.isRequired
};

export default ForecastExtendend;
