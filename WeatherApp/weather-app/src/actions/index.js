import getUrlForecastByCity from "./../services/getUrlForecastByCity";
import getUrlWeatherByCity from "./../services/getUrlWeatherByCity";
import transformForecast from "./../services/transformForecast";
import transformWeather from "./../services/transformWeather";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

export const GET_WEATHER_CITY = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = payload => {
  return dispatch => {
    const url_forecast = getUrlForecastByCity(payload);

    //Activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));

    return fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);

        // Modificar el estado con el resultado de la promise()
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city));

      const url_weather = getUrlWeatherByCity(city);

      fetch(url_weather) //fetches the weather api from server
        .then(resolve => {
          return resolve.json(); //returns the body of the fetch as a json structure
        })
        .then(data => {
          const newWeather = transformWeather(data);
          dispatch(setWeatherCity({ city, data }));
        });
    });
  };
};
