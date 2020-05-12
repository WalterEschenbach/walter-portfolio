import React from "react";
import Toolkit from "./Toolkit";
import Nav from "./Nav";
import Logo from "./Logo";

export default function Header() {
  let width = window.innerWidth;
  return (
    <React.Fragment>
      <div className="row nine-two hundred hb">
        <Logo />
        {width >= 1024 && (
          <React.Fragment>
            <div className="fifty">
              <h1 className={`hInfo my-name animated fadeInDown`}>
                Walter Eschenbach
              </h1>
              <h3 className={`hInfo animated fadeInDown`}>
                Front-End Web Developer
              </h3>
              <h3 className={`hInfo animated fadeInDown`}>Resume</h3>
            </div>
            <div className="column fifty">
              {width >= 1024 && <Nav />}
              {width >= 1024 && <Toolkit />}
            </div>
          </React.Fragment>
        )}
        {width < 1024 && (
          <div className="hundred center b-border">
            <h1 className={`hInfo my-name hundred center`}>
              Walter Eschenbach
            </h1>
            <h3 className={`hInfo`}>Front-End Web Developer</h3>
            <h3 className={`hInfo`}>Resume</h3>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
