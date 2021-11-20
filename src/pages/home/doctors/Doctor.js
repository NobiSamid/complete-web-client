import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, image } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <h3>{name}</h3>
            <img style={{width:"100px", height:"auto"}} src={`data:image/png;base64,${image}`} alt="doc" />
        </Grid>
    );
};

export default Doctor;