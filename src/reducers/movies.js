import { FETCH_MOVIES, FETCH_MOVIE } from '../constants/actionTypes';

const initialState = {
  all: [],
  current: { starring: [] }
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, all: action.payload.movies };
    case FETCH_MOVIE:
      return { ...state, current: state.all[action.payload.index] };
    default:
      return state;
  }
};

export default movies;
