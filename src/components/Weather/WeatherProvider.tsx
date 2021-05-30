import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router";

import { RootStore } from "store/store";

import { State } from "types/location";
import {
  isWeatherNotFound,
  Weather,
  WeatherNotFound,
} from "../../types/open-weather.types";

import { getWeatherByCity, getWeatherByCoords } from "./weather.thunks";

type By = "city" | "coords";

type WeatherChildComponentProps = {
  weather: Weather | null;
};

type WeatherStateToProps = {
  weather: Weather | WeatherNotFound | null;
  currentWeather: Weather | WeatherNotFound | null;
  coords?: GeolocationCoordinates | null;
  loading: boolean;
};

type WeatherDispatchToProps = {
  getWeatherByCity: (city: string) => void;
  getWeatherByCoords: (coords: GeolocationCoordinates) => void;
};

export type WeatherConsumerProps = WeatherStateToProps & WeatherDispatchToProps;

export const WeatherProvider = (
  Child: React.ComponentType<WeatherChildComponentProps>,
  by: By
) => {
  const WeatherConsumer: React.FC<WeatherConsumerProps> = ({
    weather,
    currentWeather,
    coords,
    loading,
    getWeatherByCity,
    getWeatherByCoords,
  }) => {
    const history = useHistory();
    const location = useLocation<State>();
    const city = location.state?.city;

    useEffect(() => {
      if (by === "city") {
        city && getWeatherByCity(city);
      } else if (by === "coords") {
        coords && getWeatherByCoords(coords);
      }
    }, [coords, city]);

    if (!weather && !currentWeather) {
      return null;
    }

    if (isWeatherNotFound(weather)) {
      history.push("/not-found", {});
      return null;
    }

    return (
      <Child weather={(by === "city" ? weather : currentWeather) as Weather} />
    );
  };

  const mapStateToProps = ({
    weather,
    geolocation,
  }: RootStore): WeatherStateToProps => ({
    weather: weather.weather,
    currentWeather: weather.currentWeather,
    coords: geolocation.position?.coords,
    loading: weather.loading,
  });

  return connect(mapStateToProps, { getWeatherByCity, getWeatherByCoords })(
    WeatherConsumer
  );
};
