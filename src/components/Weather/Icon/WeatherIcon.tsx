import React from "react";
import { getIconByCode } from "@utils/getIconByCode";

type WeatherIconProps = {
  code: string;
};

export const WeatherIcon: React.FC<WeatherIconProps> = ({ code }) => {
  return (
    <img
      src={getIconByCode(code)}
      className='weather__general-state__image'
      alt='Cloudy'
    />
  );
};
