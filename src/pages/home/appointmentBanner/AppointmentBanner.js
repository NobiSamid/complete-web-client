import { Button, Grid, Typography } from '@mui/material';
import { Box, darken } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const appointmentBg ={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.7)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
                style={{ width: 400, marginTop:-110}}
                src={doctor} alt="doc" />
          </Grid>
          <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'flex-start', textAlign:'left', alignItems:'center'}}>
                <Box>
                    <Typography variant="h6" sx={{ mb:3 }} style={{color:'#5CE7ED'}}>
                    Appointment
                    </Typography>
                    <Typography variant="h4" sx={{ mb:2 }} style={{ color:"white"}} >
                        Make an appointment today
                    </Typography>
                    <Typography variant="h6" sx={{ mb:1 }} style={{color:"white", fontSize: 14, fontWeight: 300}}>
                        jani nas dflkjasf dsaflja sdflkasdfp oiefoiw flasdjf dkfj asfoief asmf asdlfj asfijasd f
                    </Typography>
                    <Button variant="contained">Learn-more</Button>
                </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;