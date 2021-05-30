import React from "react";

import { Statistic } from "./Statistic";

import { WeatherProvider } from "../WeatherProvider";
import { toMertics } from "@utils/weather";
import { Weather } from "types/open-weather.types";

import "../styles/statistic.scss";

type StatisticGridProps = {
  weather: Weather | null;
};

const StatisticGrid: React.FC<StatisticGridProps> = ({ weather }) => {
  if (!weather) {
    return null;
  }

  const metrics = toMertics(weather);

  if (!metrics) {
    return null;
  }

  return (
    <div className='weather-statistic'>
      <div className='weather-statistic__grid'>
        {Object.values(metrics).map((metric) => (
          <Statistic
            icon={metric.icon}
            name={metric.name}
            value={metric.value}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherProvider(StatisticGrid, "city");
