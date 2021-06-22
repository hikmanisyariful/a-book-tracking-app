import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BooksBasedCategory from "./BooksBasedCategory";

class ListBookCategories extends React.Component {
  render() {
    const { currentlyReading, wantToRead, read } = this.props;
    return (
      <div className="home">
        <div className="header-title">
          <h1>A Book Tracking APP</h1>
        </div>
        <div className="list-books">
          <BooksBasedCategory
            books={currentlyReading}
            title="Currently Reading"
          />
          <BooksBasedCategory books={wantToRead} title="Want to Read" />
          <BooksBasedCategory books={read} title="Read" />
        </div>
        <div>
          <Link to="/search">Add Book</Link>
        </div>
      </div>
    );
  }
}

ListBookCategories.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired
};

export default ListBookCategories;
