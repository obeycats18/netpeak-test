import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "semantic-ui-react";

import "./styles/back.scss";

export const Back: React.FC = () => {
  return (
    <div className='back'>
      <Link to='/'>
        <Icon name='arrow left' />
        Назад к выбору
      </Link>
    </div>
  );
};
