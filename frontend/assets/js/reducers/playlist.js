import {combineReducers} from 'redux';
import {
  REQUEST_PLAYLISTS,
  RECEIVED_PLAYLISTS,
  RECEIVED_CHANNELS
} from '../actions/actions.js';

const initialState = {
  playlists: [],
  isFetching: false
};

export function playlists(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PLAYLISTS:
      return {
        ...state,
        isFetching: true,
        playlists: [],
      };
    case RECEIVED_PLAYLISTS:
      return {
        ...state,
        isFetching: false,
        playlists: action.playlists,
      };
    case RECEIVED_CHANNELS:
      return {
        ...state,
        isFetching: false,
        channels: action.channels,
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  playlists,
});

export default rootReducers;
