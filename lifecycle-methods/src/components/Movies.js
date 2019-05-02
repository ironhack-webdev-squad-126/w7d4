import React from "react";
import MoviesList from "./MoviesList";
import MovieForm from "./MovieForm";

class Movies extends React.Component {
  state = {
    movies: [
      {
        title: "The Godfather",
        director: "Francis Coppola",
        hasOscars: true,
        IMDbRating: 9.2
      },
      {
        title: "Star Wars",
        director: "Rian Johnson",
        hasOscars: true,
        IMDbRating: 8.7
      },
      {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        hasOscars: false,
        IMDbRating: 9.3
      }
    ]
  };

  addMovie = movie => {
    const movies = this.state.movies.slice();
    movies.unshift(movie);
    this.setState({ movies });
  };

  deleteMovie = index => {
    const movies = this.state.movies.filter((el, i) => i !== index);
    this.setState({ movies });
  };

  componentDidMount() {
    console.log("Movies did mount");
  }

  componentDidUpdate() {
    console.log("Movies did update");
  }

  render() {
    console.log("Movies rendered");

    return (
      <React.Fragment>
        <MovieForm addMovie={this.addMovie} />
        <MoviesList deleteMovie={this.deleteMovie} movies={this.state.movies} />
      </React.Fragment>
    );
  }
}

export default Movies;
