import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Canvas from "./Canvas";

export default function Header() {
  return (
    <div className="row nine-two">
      <div className="fifty border">
        <Logo />
        <h1>Walter Eschenbach</h1>
        <h3>Front-End Web Developer</h3>
        <h3>Resume</h3>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
}
