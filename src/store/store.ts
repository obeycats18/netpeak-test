import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";

import { geolocation } from "@components/Geolocation/geolocation.reduser";
import { weather } from "@components/Weather/weather.reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({ geolocation, weather }),
  composeEnhancers(applyMiddleware(Thunk))
);

export type RootStore = ReturnType<typeof store.getState>;
