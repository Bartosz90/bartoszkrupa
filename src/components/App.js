import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import LanguageBtn from "./LanguageBtn";

export const StateContext = createContext();
const App = () => {
  const [state, setState] = useState({
    english: false,
    headerAnimationDone: false,
    changingLanguage: false,
  });
  return (
    <Router>
      <StateContext.Provider value={[state, setState]}>
        <LanguageBtn />
        <Switch>
          <Redirect exact from="/" to="/bartoszkrupa" />
          <Route exact path="/bartoszkrupa" component={Home} />
        </Switch>
      </StateContext.Provider>
    </Router>
  );
};

export default App;
