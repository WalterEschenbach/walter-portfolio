import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default function Nav() {
  const links = ["Home", "Portfolio", "Resume", "Contact"];
  return (
    <Router>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <NavLink
              to={`/${link}`}
              activeStyle={{ color: "red", fontWeight: "bold" }}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </Router>
  );
}
