import { GeolocationActions } from "./geolocation.action";

type InitialState = {
  position: GeolocationPosition | null;
};

const INITIAL_STATE: InitialState = {
  position: null,
};

export const geolocation = (
  state = INITIAL_STATE,
  action: GeolocationActions
) => {
  switch (action.type) {
    case "geo/SET_GEOLOCATION": {
      return { ...state, position: action.position };
    }
    default: {
      return state;
    }
  }
};
