import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

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

const BookingModal = ({ openModal, handleBookingClose, booking, date }) => {
const { name, time } = booking;

const handleBookingSubmit = e =>{
    alert('submitting');

    //collect data
    //send to the form

    handleBookingClose();
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
                        label="Name" 
                        variant="outlined"
                    />
                    <TextField
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        size="small"
                        variant="outlined"
                        label="Phone-Number"
                    />
                    <TextField
                        sx={{width:'90%', m:1}}
                        id="outlined-size-small"
                        size="small"
                        variant="outlined"
                        label="Email"
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