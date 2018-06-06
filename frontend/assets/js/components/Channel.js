import React from 'react';
import {Link} from 'react-router-dom';
import * as actions from "../actions";
import {connect} from 'react-redux';
import {Button, FormControl} from 'react-bootstrap';


class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      channel: {}
    };
    this.onSave = this.onSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
        channel: {
          ...this.state.channel,
          [e.target.id]: e.target.value
        }
    });
  }

  onSave() {
    this.props.dispatch(actions.updateChannel(this.state.id, this.state.channel));
  }

  componentDidMount() {
    this.props.dispatch(actions.fetchChannel(this.state.id));
  }

  componentWillReceiveProps(nextProps) {
    // If we receive Delete notification - redirect to home page immediately
    if (nextProps.isDeleted) {
      this.props.history.push(endpoints.REPORTER_HOME);
      return;
    }

    this.setState({
      channel: nextProps.channel,
      id: nextProps.channel.id
    });
  }

  render() {
    return (
      this.props.isFetching ? (<h4>Loading</h4>) :
        (<div>
          <FormControl
            id="title"
            type="text"
            value={this.state.channel.title || ''}
            placeholder="Enter Title"
            onChange={this.handleChange}
          />

          <FormControl
            id="group"
            type="text"
            value={this.state.channel.group || ''}
            placeholder="Enter Group Name"
            onChange={this.handleChange}
          />

          <FormControl
            id="path"
            type="text"
            value={this.state.channel.path || ''}
            placeholder="Enter Path"
            onChange={this.handleChange}
          />

          <Button
            bsStyle="primary"
            disabled={this.props.isFetching}
            onClick={this.onSave}
          >
            Save
          </Button>
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
