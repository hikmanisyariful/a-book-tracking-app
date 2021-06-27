import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookCard from "./BookCard";

class SearchBook extends React.Component {
  state = {
    query: "",
    books: [],
    error: false
  };

  updateQuery = query => {
    this.setState({
      query: query
    });

    if (query === "") {
      this.setState(() => ({
        books: []
      }));
    } else {
      BooksAPI.search(query).then(books => {
        if (books.error === "empty query") {
          this.setState(() => ({
            error: true
          }));
        } else {
          this.setState(() => ({
            books: books,
            error: false
          }));
        }
      });
    }
  };

  changeShelfBook = (book, shelf) => {
    this.props.changeShelfBook(book, shelf);
  };

  render() {
    const { books, error } = this.state;
    return (
      <div>
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div
            className="search-books-input-wrapper"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {!error ? (
            <div className="books-card">
              {/* {JSON.stringify(books)} */}
              {books.map(book => (
                <BookCard
                  key={book.id}
                  book={book}
                  changeShelfBook={this.changeShelfBook}
                />
              ))}
            </div>
          ) : (
            <div>Result not match</div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBook;
