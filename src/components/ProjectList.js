import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaYoutube } from "react-icons/fa";

const projects = [
  [
    <WiDayCloudy size="7rem" />,
    "https://esch-weather-app.herokuapp.com",
    "Weather App",
  ],
  [
    <FaYoutube size="7rem" />,
    "https://chicagojoe1991.github.io/video-app",
    "Video App",
  ],
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
            <a
              className="center middle"
              style={{ height: "100%", width: "100%" }}
              href={project[1]}
            >
              {project[0]}
              <h2>{project[2]}</h2>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
