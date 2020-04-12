import React, { useContext, useState } from "react";
import { StateContext } from "./App";
import "../styles/themes.sass";

const Themes = () => {
  const [state, setState] = useContext(StateContext);
  const [activeThemeBtns, setActiveThemeBtns] = useState(false);
  const themeBtns = [
    { theme: "", className: "theme blackBtn" },
    { theme: "gray", className: "theme grayBtn" },
    { theme: "colored", className: "theme coloredBtn" },
  ];
  const btns = themeBtns.map((btn, index) => (
    <button
      key={index}
      className={
        activeThemeBtns ? `${btn.className} active` : `${btn.className}`
      }
      onClick={() => {
        setActiveThemeBtns(false);
        setState((state) => ({ ...state, theme: btn.theme }));
      }}
    ></button>
  ));
  return (
    <>
      <button
        className="theme themeChanger"
        onClick={() => setActiveThemeBtns(!activeThemeBtns)}
      >
        <i class="fas fa-fill-drip"></i>
      </button>
      {btns}
    </>
  );
};

export default Themes;
