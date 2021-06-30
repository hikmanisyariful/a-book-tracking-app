import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import * as BooksAPI from "./BooksAPI";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      booksSearching: [],
      error: false
    };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      value: value
    });

    const querySearch = debounce(
      () => this.debounceQuery(this.state.value),
      1000,
      {
        trailing: true
      }
    );

    querySearch();
  };

  debounceQuery = query => {
    if (query === "") {
      this.setState(() => ({
        booksSearching: []
      }));
    } else {
      BooksAPI.search(query).then(books => {
        if (books.error === "empty query") {
          this.setState(() => ({
            error: true
          }));
        } else {
          const booksTemp = this.sortingShelfBook(books, this.props.books);
          this.setState(() => ({
            booksSearching: booksTemp,
            error: false
          }));
        }
      });
    }
  };

  sortingShelfBook = (booksSearch, booksLibrary) => {
    let booksTemp = [];

    for (let i = 0; i < booksSearch.length; i++) {
      for (let j = 0; j < booksLibrary.length; j++) {
        if (booksSearch[i].id === booksLibrary[j].id) {
          booksSearch[i]["shelf"] = booksLibrary[j].shelf;
        }
      }
      booksTemp.push(booksSearch[i]);
    }
    return booksTemp;
  };

  changeShelfBook = (book, shelf) => {
    this.props.changeShelfBook(book, shelf);
  };

  render() {
    const { booksSearching, error } = this.state;
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
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          {!error ? (
            <div className="books-card">
              {booksSearching.map(book => (
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

SearchBox.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelfBook: PropTypes.func.isRequired
};

export default SearchBox;
