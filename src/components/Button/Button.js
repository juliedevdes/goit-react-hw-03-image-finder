import React from "react";
import "./Button.scss";

export default class Button extends React.Component {
  render() {
    return (
      <button className="Button" type="button" onClick={this.props.onBtnClick}>
        Load More
      </button>
    );
  }
}
