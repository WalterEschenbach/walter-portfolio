import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Toolkit from "./Toolkit";
import { render } from "@testing-library/react";

export default function Header() {
  let width = window.innerWidth;
  return (
    <div className="row nine-two hb">
      {width >= 1024 && (
        <div className="fifty">
          <Logo />
          <h1 className={`hInfo my-name`}>Walter Eschenbach</h1>
          <h3 className={`hInfo`}>Front-End Web Developer</h3>
          <h3 className={`hInfo`}>Resume</h3>
        </div>
      )}
      {width < 1024 && (
        <React.Fragment>
          <Logo />
          <div className="hundred">
            <h1 className={`hInfo my-name`}>Walter Eschenbach</h1>
            <h3 className={`hInfo`}>Front-End Web Developer</h3>
            <h3 className={`hInfo`}>Resume</h3>
          </div>
        </React.Fragment>
      )}
      {width >= 1024 && (
        <div className="fifty column">
          <Nav />
          <Toolkit />
        </div>
      )}
    </div>
  );
}
