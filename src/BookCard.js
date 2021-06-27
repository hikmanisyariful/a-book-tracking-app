import React from "react";
import PropTypes from "prop-types";
import BookChanger from "./BookChanger";

const BookCard = props => {
  const { book } = props;
  const imgStatus = typeof book.imageLinks;

  const changeShelf = shelf => {
    props.changeShelfBook(book, shelf);
  };

  return (
    <div className="book-card">
      <div className="img-wrap">
        {imgStatus === "undefined" ? (
          <div className="images"></div>
        ) : (
          <img
            className="image"
            src={book.imageLinks.smallThumbnail}
            alt={book.title}
          />
        )}
      </div>
      <p className="title-book">{book.title}</p>
      {Array.isArray(book.authors) && (
        <p className="authors-book">{book.authors.join(", ")}</p>
      )}
      {book.shelf ? (
        <BookChanger shelf={book.shelf} changeShelf={changeShelf} />
      ) : (
        <BookChanger shelf="none" changeShelf={changeShelf} />
      )}
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelfBook: PropTypes.func.isRequired
};

export default BookCard;
