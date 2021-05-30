import React from "react";

import "../styles/statistic.scss";

type StatisticProps = {
  name: string;
  value?: string;
  content?: any;
  icon?: any;
};

export const Statistic: React.FC<StatisticProps> = ({
  name,
  value,
  content,
  icon,
}) => {
  return (
    <div className='weather-statistic__item'>
      <p className='weather-statistic__item-name'>{name}</p>
      {icon && (
        <img src={icon} className='weather-statistic__item-icon' alt='' />
      )}
      {value && <h1 className='weather-statistic__item-value'>{value}</h1>}

      {content ? content : null}
    </div>
  );
};
