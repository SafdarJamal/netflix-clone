import { FETCH_MOVIES, FETCH_MOVIE } from '../constants/actionTypes';

const initialState = {
  movies: [],
  movie: {}
};

const movies = (state = initialState, action) => {
  switch (action.key) {
    case FETCH_MOVIES:
      return { ...state, all: action.movies };
    case FETCH_MOVIE:
      return { ...state, current: action.movie };
    default:
      return state;
  }
};

export default movies;
