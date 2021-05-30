import React, { useState } from "react";
import { useHistory } from "react-router";

import { Input, Button } from "semantic-ui-react";

import "./style/city.scss";

export const City: React.FC = () => {
  const [name, setName] = useState("");

  const history = useHistory();

  const handleChange = (value: string) => {
    setName(value);
  };

  const handleButtonClick = () => {
    if (!name || !name.length) return;

    history.push("/weather", { city: name });
  };

  return (
    <div className='weather-main__city'>
      <h2 className='weather-main__city-headline'>
        Узнайте погоду в любой точке мира
      </h2>
      <Input
        value={name}
        onChange={(_, { value }) => handleChange(value)}
        className='weather-main__city-input'
        placeholder='Введите название города'
      />
      <Button onClick={handleButtonClick}>Найти</Button>
    </div>
  );
};
