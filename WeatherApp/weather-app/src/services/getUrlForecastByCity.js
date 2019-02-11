import { api_key } from "./../constants/api_url";

const url_base_forecast = "http://api.openweathermap.org/data/2.5/forecast";

const getUrlForecastByCity = city => {
  return `${url_base_forecast}?q=${city}&appid=${api_key}`;
};

export default getUrlForecastByCity;
