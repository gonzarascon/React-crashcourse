import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

import transformWeather from "./../../services/transformWeather";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";

// import PropTypes from "prop-types";

import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null
    };
  }

  componentDidMount() {
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather) //fetches the weather api from server
      .then(resolve => {
        return resolve.json(); //returns the body of the fetch as a json structure
      })
      .then(data => {
        const newWeather = transformWeather(data);
        this.setState({
          data: newWeather
        });
      });
  };

  render() {
    const { onWeatherLocationClick } = this.props;

    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
      </div>
    );
  }
}
WeatherLocation.propTypes = {
  onWeatherLocationClick: PropTypes.func,
  city: PropTypes.string.isRequired
};
export default WeatherLocation;
