import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import GamePage from "../pages/GamePage";


const Routes = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Game" exact>
            <GamePage />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Routes;
