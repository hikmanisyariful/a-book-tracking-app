import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

import ListBookCategories from "./ListBookCategories";
import SearchBook from "./SearchBook";

class App extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books: books
      }));
    });
  }

  changeShelfBook = (book, shelf) => {
    console.log(book.id, shelf);
    BooksAPI.update(book, shelf)
      .then(books => {
        return BooksAPI.getAll();
      })
      .then(books => {
        console.log(books);
        this.setState(() => ({
          books: books
        }));
      });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <ListBookCategories
              books={books}
              changeShelfBook={this.changeShelfBook}
            />
          )}
        />
        <Route path="/search" render={() => <SearchBook />} />
      </div>
    );
  }
}

export default App;
