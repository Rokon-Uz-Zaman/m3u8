import React from 'react';
import {Link} from 'react-router-dom';
import * as endpoints from "../constants/endpoints";
import {fetchPlaylists} from "../actions/actions";
import {connect} from 'react-redux';

class PlaylistsList extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
    console.log('fetchPlaylists');
    dispatch(fetchPlaylists());
  }

  render() {
    const {playlists} = this.props;
    return (
      <div>
        <h2>My Playlists</h2>
        {playlists && <ul>
          {playlists.map(playlist =>
            <li key={playlist.id}>
              <Link to={endpoints.PATH_PLAYLISTS + playlist.id}>{playlist.title}</Link>
            </li>
          )}
        </ul>}
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists.playlists,
  };
};

export default connect(mapStateToProps)(PlaylistsList);
