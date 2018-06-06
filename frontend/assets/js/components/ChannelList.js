import React from 'react';
import * as endpoints from "../constants/endpoints";
import {fetchChannels} from "../actions";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ChannelList extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchChannels(this.props.id));
  }

  render() {
    const {channels} = this.props;
    return (
      <div>
        <h2>Channels</h2>
        {channels && <ul>
          {channels.map(channel =>
            <li key={channel.id}>
              <Link to={endpoints.PATH_CHANNELS + channel.id}>
                {channel.title} <strong>{channel.group}</strong>
              </Link>
            </li>
          )}
        </ul>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.playlists.channels,
  };
};

export default connect(mapStateToProps)(ChannelList);
