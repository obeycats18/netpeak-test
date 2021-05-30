import React from "react";
import { connect } from "react-redux";

import General from "@components/Weather/General/General";
import { Details } from "@components/Weather/Details/Detailes";

import "./styles/weather.scss";

export const Weather: React.FC = () => {
  return (
    <div className='weather'>
      <General />
      <Details />
    </div>
  );
};
