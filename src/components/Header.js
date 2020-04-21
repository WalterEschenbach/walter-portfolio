import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Toolkit from "./Toolkit";

export default function Header() {
  return (
    <div className="row nine-two hb">
      <div className="fifty">
        <Logo />
        <h1 className="hInfo my-name">Walter Eschenbach</h1>
        <h3 className="hInfo">Front-End Web Developer</h3>
        <h3 className="hInfo">Resume</h3>
      </div>
      <div className="fifty column">
        <Nav />
        <Toolkit />
      </div>
    </div>
  );
}
