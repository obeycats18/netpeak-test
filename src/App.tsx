import React from "react";

import { WeatherNotFound } from "@pages/NotFound/NotFound";
import { Weather } from "@pages/Weather/Weather";
import { Main } from "@pages/Main/Main";
import { Route, Switch } from "react-router";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/weather' component={Weather} />
      <Route exact path='/not-found' component={WeatherNotFound} />
    </Switch>
  );
};

export default App;
