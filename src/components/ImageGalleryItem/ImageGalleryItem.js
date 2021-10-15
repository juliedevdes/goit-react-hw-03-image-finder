import React from "react";
import "./ImageGalleryItem.scss";

export default class ImageGalleryItem extends React.Component {
  onClick = () => {
    this.props.onClick(this.props.img);
  };

  render() {
    return (
      <li className="ImageGalleryItem" key={this.props.img.id}>
        <img
          src={this.props.img.webformatURL}
          alt={this.props.img.tags}
          onClick={this.onClick}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
