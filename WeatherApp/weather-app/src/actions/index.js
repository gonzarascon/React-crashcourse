import getUrlForecastByCity from "./../services/getUrlForecastByCity";
import transformForecast from "./../services/transformForecast";

export const SET_CITY = "SET_CITY";

export const setCity = payload => ({ type: SET_CITY, payload });

export const fetchForecast = payload => {
  return dispatch => {
    const url_forecast = getUrlForecastByCity(dispatch);

    //Activar en el estado un indicador de busqueda de datos
    fetch(url_forecast)
      .then(data => data.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);

        // Modificar el estado con el resultado de la promise()
      });
  };
};
