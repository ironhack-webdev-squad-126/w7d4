import React, { Fragment } from "react";
import Movie from "./Movie";

class MoviesList extends React.Component {
  componentDidMount() {
    console.log("MoviesList did mount");
  }

  componentDidUpdate() {
    console.log("MoviesList did update");
  }

  render() {
    console.log("List rendered");
    return (
      <Fragment>
        {this.props.movies.map((el, i) => (
          <Movie
            deleteMovie={() => this.props.deleteMovie(i)}
            key={i}
            {...el}
          />
        ))}
      </Fragment>
    );
  }
}

export default MoviesList;
