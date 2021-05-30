import React from "react";

import { City } from "@components/City/City";
import Geolocation from "@components/Geolocation/Geolocation";
import WeatherCurrent from "@components/Weather/Current/WeatherCurrent";

import "./style/main.scss";

export const Main: React.FC = () => {
  return (
    <div className='weather-main'>
      <Geolocation />
      <WeatherCurrent />
      <City />
    </div>
  );
};
