import React from 'react';
import {fetchChannels} from "../actions";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import FilterableChannelsList from "./FilterableChannelsList";

class PlaylistChannelsList extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchChannels(this.props.id));
  }

  render() {
    const {channels} = this.props;
    return (
      <div>
        <h1>Playlist Channels</h1>
        <FilterableChannelsList channels={channels}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.playlists.channels,
  };
};

export default connect(mapStateToProps)(PlaylistChannelsList);
