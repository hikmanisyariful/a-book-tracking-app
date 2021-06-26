import React from "react";
import PropTypes from "prop-types";

class BookChanger extends React.Component {
  state = {
    value: ""
  };

  componentDidMount() {
    this.setState(() => ({
      value: this.props.shelf
    }));
  }

  handleChange = shelf => {
    this.setState({
      value: shelf
    });
    this.props.changeShelf(shelf);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.changeShelf(this.state.value);
  };

  render() {
    return (
      <form
        className="book-shelf-changer"
        onSubmit={event => this.handleSubmit(event)}
      >
        <select
          value={this.state.value}
          onChange={event => this.handleChange(event.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">read</option>
          <option value="none">none</option>
        </select>
      </form>
    );
  }
}

BookChanger.propTypes = {
  shelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default BookChanger;
