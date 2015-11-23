import React, { Component, PropTypes } from 'react';

export default class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        {this.props.movies.map((movie) =>
          <article key={movie.id}>
            <h3>{movie.name}</h3>
            <p>
              Year: {movie.year}
            </p>
          </article>
        )}
      </div>
    );
  }
}
