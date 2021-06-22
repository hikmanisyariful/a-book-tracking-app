import React from "react";
import PropTypes from "prop-types";

const BookCard = props => {
  const { book } = props;
  return (
    <div className="book-card">
      <div className="img-wrap">
        <img
          className="image"
          src={book.imageLinks.smallThumbnail}
          alt="book"
        />
      </div>
      <p className="title-book">{book.title}</p>
      <p className="authors-book">{book.authors.join(", ")}</p>
      <div className="book-shelf-changer"></div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookCard;
