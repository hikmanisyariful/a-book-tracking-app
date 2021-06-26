import React from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";

const BooksBasedCategory = props => {
  const changeShelfBook = (book, shelf) => {
    props.changeShelfBook(book, shelf);
  };

  return (
    <div className="books-category">
      <h2 className="title-category">{props.title}</h2>
      <div className="books-card">
        {props.books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            changeShelfBook={changeShelfBook}
          />
        ))}
      </div>
    </div>
  );
};

BooksBasedCategory.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelfBook: PropTypes.func.isRequired
};

export default BooksBasedCategory;
