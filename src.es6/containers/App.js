'user strict';

import React, { Component, PropTypes } from 'react';
import { createHistory } from 'history';
import { createStore, compose } from 'redux';
import { connect } from 'react-redux';
import { reduxReactRouter } from 'redux-router';
import { addMovie } from '../actions';
import reducers from '../reducers';
import MovieList from '../components/MovieList';

class App extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }

  render() {
    const { movies } = this.props;

    return (
      <MovieList movies={movies} />
    );
  }
}

function select(state) {
  return {
    movies: state.movies,
  };
}

export const store = compose(reduxReactRouter({ createHistory }))(createStore)(reducers);
export default connect(select)(App);
