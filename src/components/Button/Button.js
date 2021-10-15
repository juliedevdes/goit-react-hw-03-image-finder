import React from "react";

export default class Button extends React.Component {
  onClick() {
    console.log("click");
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <button type="button" onClick={this.onClick}>
        Load More
      </button>
    );
  }
}
