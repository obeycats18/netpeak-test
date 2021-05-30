export type WeatherItem = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Weather = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<WeatherItem>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
};

export type WeatherNotFound = {
  status: number;
  message: string;
};

export const isWeatherNotFound = (
  weather: Weather | WeatherNotFound | null
) => {
  if (!weather) return false;

  return (weather as WeatherNotFound).status;
};
