import { Weather, WeatherNotFound } from "types/open-weather.types";
import { WeatherActions } from "./weather.actions";

type InitialState = {
  weather: Weather | WeatherNotFound | null;
  currentWeather: Weather | WeatherNotFound | null;
  loading: boolean;
};

const INITIAL_STATE: InitialState = {
  weather: null,
  currentWeather: null,
  loading: false,
};

export const weather = (
  state = INITIAL_STATE,
  action: WeatherActions
): InitialState => {
  switch (action.type) {
    case "weather/SET_WEATHER": {
      return { ...state, weather: action.weather };
    }

    case "weather/SET_CURRENT_WEATHER": {
      return { ...state, currentWeather: action.weather };
    }

    case "weather/SET_LOADING": {
      return { ...state, loading: action.loading };
    }

    default: {
      return state;
    }
  }
};
