import React from "react";
import Logo from "./Logo";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default function Nav() {
  const links = ["Home", "Portfolio", "Resume", "Contact"];
  return (
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
  );
}
