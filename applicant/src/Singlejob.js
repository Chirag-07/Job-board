import React from 'react'
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core/';

export default function Singlejob({singlejob, onClick}) {
    return (
        <Paper onClick={onClick} className={'singlejob'}>
            <div>
                <Typography variant='h5'>{singlejob.title}</Typography>
                <Typography variant='h6'>{singlejob.company}</Typography>
                <Typography variant='h6'>{singlejob.location}</Typography>
            </div>
            <div>
            <Typography>{singlejob.created_at.split(' ').slice(0,3).join(' ')}</Typography>
            </div>
        </Paper>
    );
}