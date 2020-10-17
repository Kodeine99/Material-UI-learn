import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'; 

function Gridlayout() {
    return (
        <Grid container spacing={2} justify="center">
            <Grid item xs={12} sm={6}>
            <Paper style={{height: 75, width: '100%'}} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper style={{height: 75, width: '100%'}} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper style={{height: 75, width: '100%'}} />
            </Grid>
        </Grid>
    );
}

export default Gridlayout;
