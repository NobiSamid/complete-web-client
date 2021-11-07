import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../booking/Booking';

const bookings =[
    {
        id: 1,
        name:'Teeth Orthodonics',
        time:'08.00 AM - 09.00AM',
        space:10
    },
    {
        id: 2,
        name:'Teeth Orthodonics',
        time:'08.00 AM - 09.00AM',
        space:10
    },
    {
        id: 3,
        name:'Teeth Orthodonics',
        time:'08.00 AM - 09.00AM',
        space:10
    },
    {
        id: 4,
        name:'Teeth Orthodonics',
        time:'08.00 AM - 09.00AM',
        space:10
    },
    {
        id: 5,
        name:'Teeth Orthodonics',
        time:'08.00 AM - 09.00AM',
        space:10
    }
]

const AvilableAppoinments = ({date}) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ color:'info.main', fontWeight:600}}>avilable appoinments {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking =><Booking key={booking.id} date={date} booking={booking}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvilableAppoinments;