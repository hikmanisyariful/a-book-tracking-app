import React from "react";
import PropTypes from "prop-types";

class BookChanger extends React.Component {
  state = {};

  handleChange = shelf => {
    this.setState({
      shelfOption: shelf
    });
    this.props.changeShelf(shelf);
  };

  render() {
    const value = this.props.shelf;
    return (
      <form className="book-shelf-changer">
        <select
          value={this.state.shelfOption || value}
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
