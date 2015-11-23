import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import './actions';

const initialState = [{
  id: 0,
  name: 'Toy Story',
  year: '1995',
}];

function movies(state = initialState, action) {
  return state;
}

const reducers = combineReducers({
  movies,
  router: routerStateReducer,
});

export default reducers;
