import React from "react";

export default class Modal extends React.Component {
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.largeUrl} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}
