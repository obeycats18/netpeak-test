import { Dispatch } from "redux";
import { actions } from "./geolocation.action";

export const getGeolocation = () => (dispatch: Dispatch) => {
  if (!navigator.geolocation) {
    return console.error("Geolocation is not supported by this browser!");
  }

  navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
    dispatch(actions.setGeolocation(position));
  });
};
