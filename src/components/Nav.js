import React from "react";
import Logo from "./Logo";
import Burger from "./Burger";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default function Nav() {
  const links = ["Home", "Portfolio", "Resume", "Contact"];
  let width = window.innerWidth;

  return (
    <div>
      {width > 1024 && (
        <Router>
          <nav className="right">
            <ul className="space-between row">
              {links.map((link) => (
                <li key={link} className="listStyle">
                  <NavLink
                    to={`/${link}`}
                    activeStyle={{ color: "red", fontWeight: "bold" }}
                  >
                    <h3>{link}</h3>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </Router>
      )}
    </div>
  );

  return <Burger />;
}
