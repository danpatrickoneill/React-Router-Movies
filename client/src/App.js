import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (!savedList.includes(movie)) {
      console.log(movie);
      savedList.push(movie);
    }
    this.setState({ savedList });
  };

  render() {
    return (
      <Router>
        <div>
          {/* Why does this list just display titles so nicely? */}
          <SavedList list={this.state.savedList} />
          <Route exact path="/" component={MovieList} />
          <Route
            path="/movies/:id"
            render={props => (
              <Movie addToSavedList={this.addToSavedList} {...props} />
            )}
          />
        </div>
      </Router>
    );
  }
}
