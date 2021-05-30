import React from "react";

import Hurricane from "@icons/weather/hurricane.svg";

import "./style/not-found.scss";

export const WeatherNotFound: React.FC = () => {
  return (
    <div className='weather-not-found'>
      <div className='weather-not-found__icon'>
        <img src={Hurricane} alt='' />
      </div>
      <h2 className='weather-not-found__headline'>
        К сожалению, по данному городу прогноза не найдено :( <br /> Проверте
        правильно ли вы ввели название
      </h2>
    </div>
  );
};
