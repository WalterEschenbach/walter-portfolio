import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaYoutube, FaGithubSquare, FaNewspaper } from "react-icons/fa";

const projects = [
  [
    <FaGithubSquare size="7rem" />,
    "https://romantic-edison-5bc7d1.netlify.app",
    "Github Battle",
  ],
  [
    <FaNewspaper size="7rem" />,
    "https://hungry-hawking-93223b.netlify.app",
    "Hacker News",
  ],
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
];

export default class ProjectList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="proj-list">
          {projects.map((project) => (
            <li className="proj center m-top animated fadeInUp" key={project}>
              <a
                className="center column middle"
                style={{ height: "100%", width: "100%" }}
                href={project[1]}
              >
                <div className="">{project[0]}</div>
                <h2 className="">{project[2]}</h2>
              </a>
            </li>
          ))}
        </ul>
        <a href="./files/Walter Eschenbach Resume - 05.09.20.pdf"></a>
      </React.Fragment>
    );
  }
}
