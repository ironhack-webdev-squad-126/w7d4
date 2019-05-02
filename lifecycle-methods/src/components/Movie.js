import React, { Fragment } from "react";

class Movie extends React.Component {
  componentWillUnmount() {
    console.log("Movie component unmounted");
  }

  componentDidUpdate() {
    console.log("Movie component updated");
  }

  componentDidMount() {
    console.log("Movie component mounted");
  }
  render() {
    console.log("Movie rendered");
    const { title, director, hasOscars, IMDbRating } = this.props;
    return (
      <Fragment>
        <h2>{title}</h2>
        <p>directed by {director}</p>
        <p>IMDB rating: {IMDbRating}</p>
        {hasOscars && <h4>Award-winning movie!</h4>}
        <button onClick={this.props.deleteMovie}>delete</button>
      </Fragment>
    );
  }
}

export default Movie;
