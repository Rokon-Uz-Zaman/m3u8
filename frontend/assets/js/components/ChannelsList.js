import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import FilterableChannelsList from "./FilterableChannelsList";
import {fetchAllChannels} from '../actions';

class ChannelsList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllChannels());
  }

  render() {
    return (
      <div>
        <h4>All Channels List</h4>
        <FilterableChannelsList channels={this.props.channels} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.playlists.channels,
  };
};

export default connect(mapStateToProps)(ChannelsList);
