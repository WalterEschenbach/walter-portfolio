import React from "react";

const tools = [
  "css3.svg",
  "git.svg",
  "github-tile.svg",
  "html5.svg",
  "javascript-vertical.svg",
  "jquery-vertical.svg",
  "react-icon.svg",
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
