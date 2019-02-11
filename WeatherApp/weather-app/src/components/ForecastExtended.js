import React, { Component } from "react";
import PropTypes from "prop-types";

import getUrlForecastByCity from "./../services/getUrlForecastByCity";
import transformForecast from "./../services/transformForecast";
import ForecastItem from "./ForecastItem";
import "./styles.css";

class ForecastExtendend extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    };
  }

  componentDidMount() {
    const url_forecast = getUrlForecastByCity(this.props.city);

    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        this.setState({ forecastData });
      });
  }

  renderForecastItemDays() {
    return "Render Items";
    // return days.map(day => (
    //   <ForecastItem key={day} weekDay={day} hour={"10"} data={data} />
    // ));
  }

  renderProgress() {
    return <h3>cargando pronostico extendido</h3>;
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronostico Extendido {city}</h2>
        {forecastData ? this.renderForecastItemDays() : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtendend.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForecastExtendend;
