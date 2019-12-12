import React from 'react';
import { Paper } from '@material-ui/core';

import Playlists from "./Playlists";
import ScrollWheel from "../../component/src/ScrollWheel";
import dataList from './data';
import './App.css';

function App() {
    return (
        <div className="App">
            <Paper className="paper playlistComponent" style={blackOverride}>
                <Playlists playlists={dataList} selected={selectPlaylist()} />
            </Paper>
            <ScrollWheel />
        </div>
    );
}

export default App;
