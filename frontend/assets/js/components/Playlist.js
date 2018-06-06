import React from 'react';
import {Link} from 'react-router-dom';
import {fetchPlaylist} from "../actions";
import {connect} from 'react-redux';
import ChannelList from "./ChannelList";

class Playlist extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
    const id = this.props.match.params.id;
    dispatch(fetchPlaylist(id));
  }

  render() {
    const {id} = this.props.match.params;
    return (
      <div>
        <h2>Playlist Details</h2>
        <h4>Playlist ID: {id}</h4>
        <ChannelList id={id}/>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists.playlists,
  };
};

export default connect(mapStateToProps)(Playlist);
