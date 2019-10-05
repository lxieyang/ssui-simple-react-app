import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import NavBar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";
import HomePage from "./containers/HomePage/HomePage";
import CharactersPage from "./containers/CharactersPage/CharactersPage";
import CharacterPage from "./containers/CharactersPage/CharacterPage/CharacterPage";
import "./App.css";

const app = () => {
  return (
    <div className="App">
      <NavBar />

      <div className="MainContent">
        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>
          <Route exact path={appRoutes.characters}>
            <CharactersPage />
          </Route>
          <Route exact path={appRoutes.character}>
            <CharacterPage />
          </Route>
          <Redirect to={appRoutes.home} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default app;
