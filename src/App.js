import React from "react";

import Searchbar from "./components/Searchbar/Serachbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

class App extends React.Component {
  state = {
    images: null,
    pageNum: 1,
    loading: false,
    showModal: false,
    modalContent: {},
  };
  toggleModal = (e) => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onImgClick = (img) => {
    this.setState({ modalContent: img });
    this.toggleModal();
  };

  onSubmit = (query) => {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}'&page=${this.state.pageNum}&per_page=12&key=23034166-be8967e0ea66b0703121f1d79`
    )
      .then((r) => r.json())
      .then((imgs) => {
        this.setState({ images: imgs.hits });
        // this.setState((prevState) => ({ pageNum: (prevState.pageNum += 1) }));
      })
      .finally(() => this.setState({ loading: false }))
      .catch(console.log);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading && <Loader />}
        {this.state.images && (
          <ImageGallery
            imagesArray={this.state.images}
            onImgClick={this.onImgClick}
          />
        )}

        {this.state.showModal && (
          <Modal img={this.state.modalContent} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
