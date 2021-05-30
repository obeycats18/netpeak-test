import React from "react";
import { Weather } from "types/open-weather.types";
import { WeatherIcon } from "../Icon/WeatherIcon";
import { WeatherTemp } from "../Temp/Temp";
import { WeatherFeelsLike } from "../Temp/FeelsLike";
import { WeatherProvider } from "../WeatherProvider";

import "../styles/current.scss";

type WeatherCurrentProps = {
  weather?: Weather | null;
};

const WeatherCurrent: React.FC<WeatherCurrentProps> = ({ weather }) => {
  return weather ? (
    <div className='weather-current'>
      <div className='weather-current__icon'>
        <WeatherIcon code={weather.weather[0].icon} />
      </div>
      <div className='weather-current__temp'>
        <WeatherTemp
          temp={weather.main.temp}
          className='weather-current__temp-value'
        />
        <WeatherFeelsLike
          className='weather-current__temp-feels'
          feelsLike={weather.main.feels_like}
        />
      </div>
    </div>
  ) : null;
};

export default WeatherProvider(WeatherCurrent, "coords");
