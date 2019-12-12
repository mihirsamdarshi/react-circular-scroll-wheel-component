import React, {useEffect, useState} from 'react';
import {Grid, Paper} from '@material-ui/core';

import Playlists from "./Playlists";
import ScrollWheel from "./component/ScrollWheel";
import useWindowDimensions from "./WindowDimensions";

import dataList from './data';
import './App.scss';

const App = () => {
    const [playlistIds, setPlaylistIds] = useState([]);
    const [listLength, setListLength] = useState(0);
    const [angle, setAngle] = useState(0);
    const [angleIncrement, setAngleIncrement] = useState(0);

    const {height, width} = useWindowDimensions();
    const heightWidthStyle = {
        height: height - 84,
        width: width - 84,
        marginTop: 50,
    };

    const selectPlaylist = () => {
        const index = (((angle + 360) % 360) / 360) * listLength;
        return playlistIds[index];
    };

    useEffect(() => {
        setListLength(dataList.length);
        setAngleIncrement(Math.floor(360 / listLength));
        dataList.forEach(element => setPlaylistIds(playlistIds => [...playlistIds, element.id]));
    }, [listLength]);

    return (
        <div className="App">
            <Grid container className="gridContainer">
                <Grid item xs={6} style={heightWidthStyle}>
                    <Paper className='paper'>
                        <Playlists playlists={dataList} selected={selectPlaylist()}/>
                    </Paper>
                </Grid>
                <Grid item xs={6} style={heightWidthStyle}>
                    <div className="scrollContainer">
                        <ScrollWheel onSlideMove={setAngle} snapAngle={angleIncrement}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
