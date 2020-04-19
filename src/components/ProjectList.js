import React from "react";

const projects = [
  ["weather-app", "https://esch-weather-app.herokuapp.com"],
  ["video-app", "https://chicagojoe1991.github.io/video-app"],
];

export default class ProjectList extends React.Component {
  render() {
    return (
      <ul className="proj-list">
        {projects.map((project) => (
          <li className="proj">
            <a href={project[1]}>{project[0]}</a>
          </li>
        ))}
      </ul>
    );
  }
}
