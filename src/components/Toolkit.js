import React from "react";
import ToolList from "./ToolList";

class Toolkit extends React.Component {
  state = { slide: false };

  toggleHover = () => {
    this.setState({ slide: !this.state.slide });
    console.log(this.state.slide);
  };

  render() {
    return (
      <div
        className={`border end toolkit ${
          this.state.slide === true ? "slide" : ""
        }`}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <ToolList />
      </div>
    );
  }
}

export default Toolkit;
