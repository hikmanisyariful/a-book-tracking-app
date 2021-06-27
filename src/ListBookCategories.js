import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BooksBasedCategory from "./BooksBasedCategory";

class ListBookCategories extends React.Component {
  changeShelfBook = (book, shelf) => {
    this.props.changeShelfBook(book, shelf);
  };

  render() {
    const currentlyReading = this.props.books.filter(
      book => book.shelf === "currentlyReading"
    );

    const wantToRead = this.props.books.filter(
      book => book.shelf === "wantToRead"
    );

    const read = this.props.books.filter(book => book.shelf === "read");

    return (
      <div className="home">
        <div className="header-title">
          <h1>A Book Tracking APP</h1>
        </div>
        <div className="list-books">
          <BooksBasedCategory
            books={currentlyReading}
            title="Currently Reading"
            changeShelfBook={this.changeShelfBook}
          />
          <BooksBasedCategory
            books={wantToRead}
            title="Want to Read"
            changeShelfBook={this.changeShelfBook}
          />
          <BooksBasedCategory
            books={read}
            title="Read"
            changeShelfBook={this.changeShelfBook}
          />
        </div>
        <div className="open-search">
          <Link className="link-add" to="/search">
            Add Book
          </Link>
        </div>
      </div>
    );
  }
}

ListBookCategories.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelfBook: PropTypes.func.isRequired
};

export default ListBookCategories;
