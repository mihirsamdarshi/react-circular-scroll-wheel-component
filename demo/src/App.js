import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';

import Playlists from "./Playlists";
import ScrollWheel from "../../component/src/ScrollWheel";
import dataList from './data';
import './App.css';

const App = () => {
    const [playlistIds, setPlaylistIds] = useState([]);
    const [listLength, setListLength] = useState(0);
    const [angle, setAngle] = useState(0);
    const [angleIncrement, setAngleIncrement] = useState(0);

    const blackOverride = {
        backgroundColor: '#EEE',
    };

    const selectPlaylist = () => {
        const index = (((angle + 360) % 360) / 360) * listLength;
        return playlistIds[index];
    };

    useEffect(() => {
        setListLength(dataList.length);
        setAngleIncrement(Math.floor(360 / listLength));
        dataList.forEach(element => setPlaylistIds(playlistIds => [...playlistIds, element.id]));
    }, []);

    return (
        <div className="App">
            <Paper className="paper playlistComponent" style={blackOverride}>
                <Playlists playlists={dataList} selected={selectPlaylist()} />
            </Paper>
            <ScrollWheel onSlideMove={setAngle} snapAngle={angleIncrement} />
        </div>
    );
};

export default App;
