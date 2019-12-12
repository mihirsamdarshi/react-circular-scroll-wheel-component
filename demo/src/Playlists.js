import React, { useEffect, useRef } from 'react';
import { Card, CardActionArea, CardContent, Typography, } from '@material-ui/core';
import '../stylesheets/Playlists.scss';

const PlaylistBox = (props) => {
    const scrollElement = useRef(null);

    const highlighted = {
        backgroundColor: '#007AFF',
    };

    useEffect(() => {
        if (props.selected) {
            scrollElement.current.focus();
            scrollElement.current.scrollIntoView();
        }
    });

    return (
        <Card className="card playlist" ref={scrollElement}>
            <CardActionArea>
                <CardContent style={props.selected ? highlighted : null} className="details">
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

const Playlists = props => {
    const isSelected = (element) => {
        return props.selected === element.id;
    };

    return (
        <div>
            {
                props.playlists.map((element) => (
                    <PlaylistBox
                        key={element.id}
                        playlistId={element.id}
                        name={element.name}
                        selected={isSelected(element)}
                    />
                ))
            }
        </div>
    );
};

export default Playlists;
