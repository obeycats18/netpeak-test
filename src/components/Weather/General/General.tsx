import React from "react";
import { useHistory, useLocation, useParams } from "react-router";

import { getDayOfWeek, getTime } from "@utils/date";
import { WeatherProvider } from "../WeatherProvider";
import { WeatherIcon } from "../Icon/WeatherIcon";
import { WeatherTemp } from "../Temp/Temp";
import { WeatherFeelsLike } from "../Temp/FeelsLike";

import { State } from "types/location";
import { Weather } from "types/open-weather.types";

import "../styles/general.scss";

type GeneralProps = {
  weather: Weather | null;
};

const General: React.FC<GeneralProps> = ({ weather }) => {
  const { city } = useParams<State>();

  if (!weather) {
    return null;
  }

  return (
    <aside className='weather__general'>
      <div className='weather__general-state'>
        <WeatherIcon code={weather.weather[0].icon} />
      </div>
      <WeatherTemp temp={weather.main.temp} />
      <WeatherFeelsLike feelsLike={weather.main.feels_like} />
      <p className='weather__general-date'>
        {getDayOfWeek(weather.dt)},{" "}
        <span className='time'>{getTime(weather.dt)}</span>
      </p>
      <div className='weather__general-city'>{city}</div>
    </aside>
  );
};

export default WeatherProvider(General, "city");
