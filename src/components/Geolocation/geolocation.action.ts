import { ActionsType } from "../../types/redux.types";

const SET_GEOLOCATION = "geo/SET_GEOLOCATION";

export const actions = {
  setGeolocation: (position: GeolocationPosition) =>
    ({ type: SET_GEOLOCATION, position } as const),
};

export type GeolocationActions = ActionsType<typeof actions>;
