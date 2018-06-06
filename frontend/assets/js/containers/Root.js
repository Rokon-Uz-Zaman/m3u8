import React, {Component} from 'react';

import {HashRouter, Route} from 'react-router-dom';
import * as endpoints from "../constants/endpoints";
import {connect} from 'react-redux';
import PlaylistsList from "../components/PlaylistsList";
import Playlist from "../components/Playlist";
import Link from "react-router-dom/es/Link";
import Channel from "../components/Channel";


class Root extends Component {
    render() {
        return (
            <HashRouter>
                <div className='container'>
                    <h1>Video Playlist Editor</h1>
                    <Link to={endpoints.PATH_PLAYLISTS}>My Playlists</Link>
                    <Route exact path={endpoints.PATH_PLAYLISTS} component={PlaylistsList}/>
                    <Route exact path={endpoints.PATH_PLAYLISTS + ':id'} component={Playlist}/>
                    <Route exact path={endpoints.PATH_CHANNELS + ':id'} component={Channel}/>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps)(Root);
