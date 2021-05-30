import type { Weather, WeatherNotFound } from "types/open-weather.types";
import { ActionsType } from "types/redux.types";

const SET_WEATHER = "weather/SET_WEATHER";
const SET_CURRENT_WEATHER = "weather/SET_CURRENT_WEATHER";
const SET_LOADING = "weather/SET_LOADING";

export const actions = {
  setWeather: (weather: Weather | WeatherNotFound | null) =>
    ({ type: SET_WEATHER, weather } as const),
  setCurrentWeather: (weather: Weather | WeatherNotFound | null) =>
    ({ type: SET_CURRENT_WEATHER, weather } as const),
  setLoading: (loading: boolean) => ({ type: SET_LOADING, loading } as const),
};

export type WeatherActions = ActionsType<typeof actions>;
