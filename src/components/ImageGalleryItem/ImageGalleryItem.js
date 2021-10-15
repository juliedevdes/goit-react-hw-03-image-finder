import React from "react";

export default class ImageGalleryItem extends React.Component {
  render() {
    return (
      <li className="ImageGalleryItem" key={this.props.img.id}>
        <img
          src={this.props.img.webformatURL}
          alt={this.props.img.tags}
          onClick={this.props.onClick}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
