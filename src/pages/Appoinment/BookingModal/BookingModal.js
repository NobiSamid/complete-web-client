import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openModal, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time, price } = booking;
    const {user} = useAuth();
    const initialInfo = {patientName: user.displayName, email: user.email, phone:''}
    console.log(user.email);

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnblur = e  =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo);
        // console.log(newInfo);
        // console.log(bookingInfo);
    }

    const handleBookingSubmit = e =>{

        // collect data
        const appointment = {
            ...bookingInfo, 
            time,
            price,
            serviceName: name, 
            date: date.toLocaleDateString()
        }
        //send to the server
        // fetch('http://localhost:5000/appointments', {
        fetch('https://intense-gorge-28690.herokuapp.com/appointments', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                setBookingSuccess(true);
                handleBookingClose();
            }
        })
        console.log(appointment);

        
        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              $ {price}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <form onSubmit={handleBookingSubmit}>
                    <TextField
                        disabled
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                    />
                    <TextField
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        size="small"
                        defaultValue={user.displayName}
                        variant="outlined"
                        name="patientName"
                        onBlur={handleOnblur}
                    />
                    <TextField
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        size="small"
                        variant="outlined"
                        label="Phone-Number"
                        name="phone"
                        onBlur={handleOnblur}
                    />
                    <TextField
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        size="small"
                        variant="outlined"
                        defaultValue={user.email}
                        name="email"
                        onBlur={handleOnblur}
                    />
                    <TextField
                        disabled
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        size="small"
                        variant="outlined"
                        defaultValue={date.toDateString()}
                        label="Date"
                    />
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;