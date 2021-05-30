import { Dispatch } from "redux";

import { ConfigAPI } from "./../../config/api.config";

import { AxiosClient } from "@api/axios.client";
import { OpenWeatherAPI } from "@api/open-weather.api";

import { actions } from "./weather.actions";

const client = new AxiosClient({ baseURL: ConfigAPI.baseURL });
const openWeatherAPI = new OpenWeatherAPI(client);

export const getWeatherByCoords =
  (coords: GeolocationCoordinates) => async (dispatch: Dispatch) => {
    const weather = await openWeatherAPI.getWeatherByCoords(coords);
    dispatch(actions.setCurrentWeather(weather));
  };

export const getWeatherByCity =
  (city: string) => async (dispatch: Dispatch) => {
    dispatch(actions.setLoading(true));
    const weather = await openWeatherAPI.getWeatherByCity(city);
    dispatch(actions.setWeather(weather));
    dispatch(actions.setLoading(false));
  };
