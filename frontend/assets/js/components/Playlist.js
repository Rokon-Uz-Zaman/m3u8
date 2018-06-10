import React from 'react';
import {Link} from 'react-router-dom';
import {fetchPlaylist} from "../actions";
import {connect} from 'react-redux';
import PlaylistChannelsList from "./PlaylistChannelsList";

class Playlist extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(fetchPlaylist(id));
  }

  render() {
    const {id} = this.props.match.params;
    return (
      <div>
        <h4>Playlist ID: {id}</h4>
        <PlaylistChannelsList id={id}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists.playlists,
  };
};

export default connect(mapStateToProps)(Playlist);
