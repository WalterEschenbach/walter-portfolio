import React from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Toolkit from "./components/Toolkit";
import "./App.css";
import "./Mobile.css";

function App() {
  let width = window.innerWidth;

  return (
    <div className="App">
      <Header />
      <ProjectList />
      {width < 1024 && <Toolkit />}
    </div>
  );
}

export default App;
