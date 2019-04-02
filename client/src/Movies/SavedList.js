import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 1
    };

    console.log(this.props.clearSavedList);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie, index) => (
          <NavLink
            to={`/movies/${movie.id}`}
            activeClassName="saved-active"
            key={index}
            className="saved-movie"
          >
            {movie.title}
          </NavLink>
        ))}
        <div className="button-container">
          <Link to="/">
            <div className="home-button">Home</div>
          </Link>
          <div onClick={this.props.clearSavedList} className="clear-button">
            Clear Saved
          </div>
        </div>
      </div>
    );
  }
}
