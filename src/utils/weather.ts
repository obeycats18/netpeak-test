import { Weather } from "types/open-weather.types";
import { getTime } from "./date";

import Huminidy from "@icons/weather/humidity.svg";
import Pressure from "@icons/weather/pressure.svg";
import Sunrise from "@icons/weather/sunrise.svg";
import Sunset from "@icons/weather/sunset.svg";
import Wind from "@icons/weather/wind.svg";
import Visibility from "@icons/weather/50d.svg";

type MetricValue<V> = {
  name: string;
  value: V;
  icon: any;
};

export type Metrics = {
  visibility: MetricValue<string>;
  humidity: MetricValue<string>;
  pressure: MetricValue<string>;
  sunrise: MetricValue<string>;
  sunset: MetricValue<string>;
  wind: MetricValue<string>;
};

const toVisibilityStr = (visibility: number) =>
  `${(visibility / 1000).toFixed(1)} км`;

const toHumidityStr = (humidity: number) => `${humidity} %`;
const toPressureStr = (pressure: number) => `${pressure} мм`;
const toWindStr = (wind: number) => `${wind} м/с`;
const toSunStr = (dt: number) => getTime(dt);

export const toMertics = (weather: Weather): Metrics | null => {
  if (!weather) return null;

  return {
    visibility: {
      name: "Видимость",
      value: toVisibilityStr(weather.visibility),
      icon: Visibility,
    },
    humidity: {
      name: "Влажность",
      value: toHumidityStr(weather.main.humidity),
      icon: Huminidy,
    },
    pressure: {
      name: "Давление",
      value: toPressureStr(weather.main.pressure),
      icon: Pressure,
    },
    sunrise: {
      name: "Рассвет",
      value: toSunStr(weather.sys.sunrise),
      icon: Sunrise,
    },
    sunset: {
      name: "Закат",
      value: toSunStr(weather.sys.sunset),
      icon: Sunset,
    },
    wind: {
      name: "Скорость ветра",
      value: toWindStr(weather.wind.speed),
      icon: Wind,
    },
  };
};
