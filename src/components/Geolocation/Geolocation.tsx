import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getGeolocation } from "./geolocation.thunk";

type MapDispatchToProps = {
  getGeolocation: () => void;
};

const Geolocation: React.FC<MapDispatchToProps> = ({ getGeolocation }) => {
  useEffect(() => {
    getGeolocation();
  }, []);

  return null;
};

export default connect(null, { getGeolocation })(Geolocation);
