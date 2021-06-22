import React from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";

const BooksBasedCategory = props => {
  return (
    <div className="books-category">
      <h2 className="title-category">{props.title}</h2>
      <div className="books-card">
        {props.books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

BooksBasedCategory.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksBasedCategory;
