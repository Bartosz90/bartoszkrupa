import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StateContext } from "./App";
import "../styles/nav.sass";
import LanguageBtn from "./LanguageBtn";

const Nav = () => {
  const [state, setState] = useContext(StateContext);
  const links = [
    {
      id: 1,
      name: <i class="fas fa-home"></i>,
      path: "/bartoszkrupa",
      description: "home",
      descriptionPl: "strona główna",
    },
    {
      id: 2,
      name: <i class="far fa-user"></i>,
      path: "/bartekkrupa/about",
      description: "about me",
      descriptionPl: "o mnie",
    },
    {
      id: 3,
      name: <i class="fas fa-code"></i>,
      path: "/bartekkrupa/projects",
      description: "projects",
      descriptionPl: "projekty",
    },
    {
      id: 4,
      name: <i class="fas fa-address-book"></i>,
      path: "/bartekkrupa/contact",
      description: "contact",
      descriptionPl: "kontakt",
    },
  ];

  const navLinks = links.map((link) => (
    <NavLink
      key={link.id}
      exact
      to={link.path}
      className="navBtn"
      activeClassName="selected"
      onClick={() => {
        setState((state) => ({ ...state, navActive: !state.navActive }));
      }}
    >
      {link.name}
      <section className="navLinkDescription">
        {state.english ? link.description : link.descriptionPl}
      </section>
    </NavLink>
  ));
  return (
    <>
      <button
        className={
          state.navActive
            ? `hamburger active ${state.theme}`
            : `hamburger ${state.theme}`
        }
        onClick={() => {
          setState((state) => ({ ...state, navActive: !state.navActive }));
        }}
      >
        {state.navActive ? (
          <i class="fas fa-times"></i>
        ) : (
          <i class="fas fa-bars"></i>
        )}
      </button>
      <LanguageBtn />
      <nav
        className={
          state.navActive ? `nav active ${state.theme}` : `nav ${state.theme}`
        }
      >
        {navLinks}
      </nav>
    </>
  );
};

export default Nav;
