import React from "react";
import Logo from "./Logo";
import Burger from "./Burger";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default function Nav() {
  const links = ["Home", "Portfolio", "Resume", "Contact"];
  let width = window.innerWidth;

  return (
    <React.Fragment>
      {width >= 1024 && (
        <Router>
          <nav className="row end ">
            <ul className="space-between row">
              {links.map((link) => (
                <li key={link} className="listStyle animated bounce">
                  <NavLink
                    to={`/${link}`}
                    activeStyle={{ color: "#333333", fontWeight: "bold" }}
                  >
                    <h3>{link}</h3>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </Router>
      )}
      {/* <Burger /> */}
    </React.Fragment>
  );
}
