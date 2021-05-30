import React from "react";

import Sun from "@icons/weather/01d.svg";

export const WeatherItem: React.FC = () => {
  return (
    <div className='weather-week__item'>
      <p className='weather-week__item-day'>Mon</p>
      <img src={Sun} alt='Sun' className='weather-week__item-icon' />
      <div className='weather-week__item-temp'>
        <p className='max'>15 &#8451;</p>
        <p className='min'> -3 &#8451;</p>
      </div>
    </div>
  );
};
