import React from "react";

export default class Modal extends React.Component {
  render() {
    return (
      <div className="Overlay" onClick={this.props.toggleModal}>
        <div className="Modal">
          <img src={this.props.img.largeImageURL} alt={this.props.img.tags} />
        </div>
      </div>
    );
  }
}
