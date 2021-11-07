import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date}) => {
    const {name, time, space} =booking;
    const [openModal, setOpenModal] = React.useState(false);
    const handleBookingOpen = () => setOpenModal(true);
    const handleBookingClose = () => setOpenModal(false);


    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{py:5}}>
                    <Typography variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} Spaces available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">Book appoinment</Button>
                </Paper>
            </Grid>
            <BookingModal
                openModal={openModal}
                booking={booking}
                handleBookingClose={handleBookingClose}
                date={date}
            ></BookingModal>
        </>
        
    );
};

export default Booking;