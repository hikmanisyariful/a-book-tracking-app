import React from "react";
import PropTypes from "prop-types";
import BookChanger from "./BookChanger";

const BookCard = props => {
  const { book } = props;

  const changeShelf = shelf => {
    props.changeShelfBook(book, shelf);
  };

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
      <BookChanger shelf={book.shelf} changeShelf={changeShelf} />
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelfBook: PropTypes.func.isRequired
};

export default BookCard;
