import {combineReducers} from 'redux';
import * as actions from '../actions';

const initialState = {
  channel: {},
  channels: [],
  playlists: [],
  isFetching: false
};

export function playlists(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_PLAYLISTS:
      return {
        ...state,
        isFetching: true,
        playlists: [],
      };
    case actions.RECEIVED_PLAYLISTS:
      return {
        ...state,
        isFetching: false,
        playlists: action.playlists,
      };
    case actions.REQUEST_CHANNELS:
      return {
        ...state,
        isFetching: true
      };
    case actions.RECEIVED_CHANNELS:
      return {
        ...state,
        isFetching: false,
        channels: action.channels,
      };
    case actions.REQUEST_CHANNEL:
      return {
        ...state,
        isFetching: true
      };
    case actions.RECEIVED_CHANNEL:
      return {
        ...state,
        isFetching: false,
        channel: {...action.channel},
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  playlists,
});

export default rootReducers;
