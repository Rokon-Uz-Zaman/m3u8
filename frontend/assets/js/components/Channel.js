import React from 'react';
import {Link} from 'react-router-dom';
import * as actions from "../actions";
import {connect} from 'react-redux';


class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    }
  }

  componentDidMount() {
    this.props.dispatch(actions.fetchChannel(this.state.id));
  }

  render() {
    const {id} = this.props.match.params;
    const channel = this.props.channel;
    return (
      this.props.isFetching ? (<h4>Loading</h4>) :
        (<div>
          <h4>Title: <strong>{channel.title}</strong></h4>
          <h4>Group: <strong>{channel.group}</strong></h4>
          <p>{channel.path}</p>
        </div>)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channel: state.playlists.channel,
    isFetching: state.playlists.isFetching,
  };
};

export default connect(mapStateToProps)(Channel);
