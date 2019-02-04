import React, { Component } from "react";
// import PropTypes from "prop-types";

import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import { SUN } from "../../constants/weathers";

const location = "Buenos Aires,ar";
const api_key = "dff35022b6acd2bf2bd98d11b956d7d6";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Buenos Aires",
      data: data
    };
  }

  getWeatherstate = weather_data => {
    return SUN;
  };

  getData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherstate(weather_data);

    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${speed} m/s`
    };

    return data;
  };

  handleUpdateClick = () => {
    fetch(api_weather) //fetches the weather api from server
      .then(resolve => {
        return resolve.json(); //returns the body of the fetch as a json structure
      })
      .then(data => {
        const newWeather = this.getData(data);

        console.log(newWeather);
        debugger;

        this.setState({
          data: newWeather
        });
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
