import React from "react";
import ToolList from "./ToolList";
import { FaArrowLeft } from "react-icons/fa";

class Toolkit extends React.Component {
  state = { slide: false };

  toggleHover = () => {
    this.setState({ slide: !this.state.slide });
    console.log(this.state.slide);
  };

  render() {
    return (
      <div
        className={`border toolkit ${
          this.state.slide === true ? "slide" : "left-center"
        }`}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {this.state.slide === true && <ToolList />}
        {this.state.slide === false && <FaArrowLeft />}
      </div>
    );
  }
}

export default Toolkit;
