import React from 'react';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = (props) => {

    console.log(props);

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">Real Data</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of active COVID-19 cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;