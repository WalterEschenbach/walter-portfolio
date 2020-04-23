import React from "react";

const tools = [
  "git.svg",
  "github-tile.svg",
  "html5.svg",
  "javascript-vertical.svg",
  "css3.svg",
  "react-icon.svg",
  "jquery-vertical.svg",
];

export default function ToolList() {
  return (
    <div
      className="wrap middle center space-between "
      style={{ width: "100%", height: "100%" }}
    >
      {tools.map((tool) => (
        <img
          className="thumbnail margin-small"
          src={`../svg/${tool}`}
          rel={tool}
        />
      ))}
    </div>
  );
}
