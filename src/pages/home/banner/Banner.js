import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png'
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`
}
const verticalCenter={
    display:'flex',
    alignItems: 'center',
    height: 400,
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow:1}}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign:'left'}} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your new smile <br/>
                            Starts here
                        </Typography>
                        <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 300, color:'gray'}}>
                            sadkfj asdlfja aoierj  ieur sdf j sdfj asf  ldkfj asdflkj asdfkadfs asf afjaf asdfj adfljsf 
                        </Typography>
                        <Button variant="containerd"> get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item style={verticalCenter} xs={12} md={7}>
                    <img style={{width:'350px'}} src={chair} alt='chairbg' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;