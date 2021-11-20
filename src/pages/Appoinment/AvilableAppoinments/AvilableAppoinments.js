import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../booking/Booking';

const bookings =[
    {
        id: 1,
        name:'Teeth Orthodonics',
        price:40,
        time:'08.00 AM - 09.00AM',
        space:10
    },
    {
        id: 2,
        name:'Teeth Skelling',
        price:30,
        time:'07.00 PM - 08.00PM',
        space:15
    },
    {
        id: 3,
        name:'Root canal',
        price:50,
        time:'09.00 AM - 10.00AM',
        space:12
    },
    {
        id: 4,
        name:'Brace installation',
        price:60,
        time:'08.00 PM - 09.00PM',
        space:4
    },
    {
        id: 5,
        name:'Cavity treatment',
        price:35,
        time:'10.00 AM - 11.00AM',
        space:19
    }
]

const AvilableAppoinments = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color:'info.main', fontWeight:600}}>Avilable appoinments {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Booked successfully</Alert> }
            <Grid container spacing={2}>
                {
                    bookings.map(booking =><Booking 
                    key={booking.id} 
                    date={date} 
                    booking={booking}
                    setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvilableAppoinments;