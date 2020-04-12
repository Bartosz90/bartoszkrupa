import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Themes from "./Themes";

export const StateContext = createContext();
const App = () => {
  const [state, setState] = useState({
    english: false,
    headerAnimationDone: false,
    changingLanguage: false,
    navActive: false,
    theme: "",
  });
  return (
    <Router>
      <StateContext.Provider value={[state, setState]}>
        <Nav />
        <Themes />
        <Switch>
          <Redirect exact from="/" to="/bartoszkrupa" />
          <Route exact path="/bartoszkrupa" component={Home} />
        </Switch>
      </StateContext.Provider>
    </Router>
  );
};

export default App;
