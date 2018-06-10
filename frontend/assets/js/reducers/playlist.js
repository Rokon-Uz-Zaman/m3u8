import {combineReducers} from 'redux';
import * as actions from '../actions';

const initialState = {
  channel: {},
  channels: [],
  playlist: {},
  playlists: [],
  isFetching: false,
  errors: {}
};

export function playlists(state = initialState, action) {
  switch (action.type) {
    case actions.RECEIVED_ERRORS:
      return {
        ...state,
        errors: action.errors,
        isFetching: false
      };
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
    case actions.RECEIVED_PLAYLIST:
      return {
        ...state,
        isFetching: false,
        playlist: action.playlist,
      };
    case actions.REQUEST_CHANNELS:
      return {
        ...state,
        isFetching: true,
        channels: []
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
    case actions.REQUEST_PLAYLIST_UPDATE:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  playlists,
});

export default rootReducers;
