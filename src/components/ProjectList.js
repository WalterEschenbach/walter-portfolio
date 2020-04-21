import React from "react";

const projects = [
  ["weather-app", "https://esch-weather-app.herokuapp.com"],
  ["video-app", "https://chicagojoe1991.github.io/video-app"],
  ["3", "url3"],
  ["4", "url4"],
  ["5", "url5"],
  ["6", "url6"],
  ["7", "url7"],
  ["8", "url8"],
];

export default class ProjectList extends React.Component {
  render() {
    return (
      <ul className="proj-list">
        {projects.map((project) => (
          <li className="proj center" key={project}>
            <a href={project[1]}>
              {project[0]}
              <img src="../svg/globe.svg" alt={project} />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
