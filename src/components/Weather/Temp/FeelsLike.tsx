import React from "react";

import classNames from "classnames";

type FeelsLikeProps = {
  feelsLike: number;
  className?: string;
};

export const WeatherFeelsLike: React.FC<FeelsLikeProps> = ({
  feelsLike,
  className,
}) => {
  return (
    <h3 className={classNames("weather__general-temp-feels", className)}>
      Ощущается как {Math.ceil(feelsLike)} &#8451;
    </h3>
  );
};
