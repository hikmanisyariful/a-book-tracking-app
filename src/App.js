import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";

import ListBookCategories from "./ListBookCategories";
import SearchBook from "./SearchBook";

class App extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      for (const book of books) {
        if (book.shelf === "currentlyReading") {
          this.setState(currState => ({
            currentlyReading: currState.currentlyReading.concat([book])
          }));
        } else if (book.shelf === "wantToRead") {
          this.setState(currState => ({
            wantToRead: currState.wantToRead.concat([book])
          }));
        } else if (book.shelf === "read") {
          this.setState(currState => ({
            read: currState.read.concat([book])
          }));
        }
      }
    });
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state;
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <ListBookCategories
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
            />
          )}
        />
        <Route path="/search" render={() => <SearchBook />} />
      </div>
    );
  }
}

export default App;
