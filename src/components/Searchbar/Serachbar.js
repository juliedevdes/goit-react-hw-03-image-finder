import React from "react";
import "./Searchbar.scss";

export default class Searchbar extends React.Component {
  state = {
    inputVal: "",
  };

  handleInputChange = (e) => {
    this.setState({ inputVal: e.currentTarget.value });
  };

  reset = () => {
    this.setState({
      inputVal: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputVal);
    this.reset();
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.inputVal}
            onChange={this.handleInputChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
