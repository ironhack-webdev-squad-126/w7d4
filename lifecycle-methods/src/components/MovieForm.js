import React, { Fragment } from "react";

class MovieForm extends React.Component {
  state = {
    title: "",
    director: "",
    IMDbRating: 5,
    hasOscars: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addMovie(this.state);
    this.setState({
      title: "",
      director: "",
      IMDbRating: 5,
      hasOscars: false
    });
  };

  handleChange = event => {
    let { value, name } = event.target;

    if (name === "hasOscars") {
      value = !this.state.hasOscars;
    }
    this.setState({
      [name]: value
    });
  };

  render() {
    const { title, director, IMDbRating, hasOscars } = this.state;
    return (
      <Fragment>
        <h1>Add a movie:</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">title:</label>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="title"
            value={title}
          />
          <label htmlFor="director">director:</label>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="director"
            value={director}
          />
          <label htmlFor="IMDbRating">IMDbRating:</label>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="IMDbRating"
            value={IMDbRating}
          />
          <label htmlFor="hasOscars">hasOscars:</label>
          <input
            onChange={e => this.handleChange(e)}
            type="checkbox"
            name="hasOscars"
            checked={hasOscars}
          />

          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    );
  }
}

export default MovieForm;
