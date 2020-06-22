import React from "react";
import Resume from "./Resume.pdf";

import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default function Nav() {
  let width = window.innerWidth;

  return (
    <React.Fragment>
      {width >= 1024 && (
        <Router>
          <nav className="row end ">
            <ul className="space-between row">
              <li key="Home" className="listStyle animated bounce">
                <NavLink
                  to="/"
                  activeStyle={{ color: "#333333", fontWeight: "bold" }}
                >
                  <h3>Home</h3>
                </NavLink>
              </li>
              <li key="Resume" className="listStyle animated bounce">
                <a
                  href={Resume}
                  activestyle={{ color: "#333333", fontWeight: "bold" }}
                >
                  <h3>Resume</h3>
                </a>
              </li>
              <li key="Contact" className="listStyle animated bounce">
                <NavLink
                  to="/Contact"
                  activeStyle={{ color: "#333333", fontWeight: "bold" }}
                >
                  <h3>Contact</h3>
                </NavLink>
              </li>
            </ul>
          </nav>
        </Router>
      )}
      {/* <Burger /> */}
    </React.Fragment>
  );
}
