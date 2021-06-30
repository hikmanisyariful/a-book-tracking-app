import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BooksBasedCategory from "./BooksBasedCategory";

class ListBookCategories extends React.Component {
  changeShelfBook = (book, shelf) => {
    this.props.changeShelfBook(book, shelf);
  };

  render() {
    const shelves = [
      {
        title: "Currently Reading",
        id: "currentlyReading",
        books: this.props.books.filter(
          book => book.shelf === "currentlyReading"
        )
      },
      {
        title: "Want To Read",
        id: "wantToRead",
        books: this.props.books.filter(book => book.shelf === "wantToRead")
      },
      {
        title: "Read",
        id: "read",
        books: this.props.books.filter(book => book.shelf === "read")
      }
    ];

    return (
      <div className="home">
        <div className="header-title">
          <h1>A Book Tracking APP</h1>
        </div>
        <div className="list-books">
          {shelves.map(shelf => (
            <BooksBasedCategory
              key={shelf.id}
              books={shelf.books}
              title={shelf.title}
              changeShelfBook={this.changeShelfBook}
            />
          ))}
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
