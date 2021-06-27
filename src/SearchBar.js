import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({
      query: query.trim()
    });
    this.props.handleQuery(query);
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search" />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
