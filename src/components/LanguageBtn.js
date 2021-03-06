import React, { useContext } from "react";
import { StateContext } from "./App";
import "../styles/languageBtn.sass";

const LanguageBtn = () => {
  const [state, setState] = useContext(StateContext);
  return (
    <button
      className={
        state.navActive
          ? `languageBtn active ${state.theme}`
          : `languageBtn ${state.theme}`
      }
      onClick={() => {
        setState((state) => ({
          ...state,
          english: !state.english,
          changingLanguage: true,
        }));
        setTimeout(() => {
          setState((state) => ({ ...state, changingLanguage: false }));
        }, 1000);
      }}
    >
      {state.english ? "PL" : "ENG"}
    </button>
  );
};

export default LanguageBtn;
