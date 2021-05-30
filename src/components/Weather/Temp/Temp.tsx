import React from "react";

import classNames from "classnames";

type WeatherTempProps = {
  temp: number;
  className?: string;
};

export const WeatherTemp: React.FC<WeatherTempProps> = ({
  temp,
  className,
}) => {
  return (
    <h1 className={classNames("weather__general-temp", className)}>
      {Math.ceil(temp)} &#8451;
    </h1>
  );
};
