import { FETCH_MOVIES, FETCH_MOVIE } from '../constants/actionTypes';

const fetchMovies = payload => {
  return {
    type: FETCH_MOVIES,
    payload
  };
};

const fetchMovie = payload => {
  return {
    type: FETCH_MOVIE,
    payload
  };
};

export { fetchMovies, fetchMovie };
