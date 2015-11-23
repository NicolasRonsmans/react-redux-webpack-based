import { ADD } from './constants';

export function addMovie(movie) {
  return { type: ADD, movie };
}
