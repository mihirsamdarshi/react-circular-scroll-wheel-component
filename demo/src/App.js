import React, {useEffect, useState} from 'react';
import {Paper} from '@material-ui/core';

import Playlists from "./Playlists";
import ScrollWheel from "./component/ScrollWheel";
import dataList from './data';
import './App.scss';

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
            <Grid container className="gridContainer">
                <Grid item xs={6}>
                    <Paper className="paper playlistComponent" style={blackOverride}>
                        <Playlists playlists={dataList} selected={selectPlaylist()}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <ScrollWheel onSlideMove={setAngle} snapAngle={angleIncrement}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
