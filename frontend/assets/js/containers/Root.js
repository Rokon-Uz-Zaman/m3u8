import React, {Component} from 'react';

import {HashRouter, Route} from 'react-router-dom';
import * as endpoints from "../constants/endpoints";
import {connect} from 'react-redux';
import PlaylistsList from "../components/PlaylistsList";
import Link from "react-router-dom/es/Link";


class Root extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>React!</h1>
                    <Link to={endpoints.PATH_PLAYLISTS}>My Playlists</Link>
                    <Route exact path={endpoints.PATH_PLAYLISTS} component={PlaylistsList}/>
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
