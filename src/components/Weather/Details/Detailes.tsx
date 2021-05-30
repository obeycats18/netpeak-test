import React from "react";

import StatisticGrid from "./StatisticGrid";
import { Back } from "@components/Back/Back";

import "../styles/details.scss";

export const Details: React.FC = () => {
  return (
    <main className='weather__details'>
      <Back />
      <StatisticGrid />
    </main>
  );
};
