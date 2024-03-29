import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const {name, description, img} = props.service || {} ;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{width:"auto", height:"80", margin:" 0 auto", padding:"10px" }}
                image={img}
                alt="card thumb"
            />
                <CardContent>
                    <Typography variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    avilable
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;