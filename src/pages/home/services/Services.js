import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/whitening.png';
import whitening from '../../../images/cavity.png';
import Service from './Service';
import Typography from '@mui/material/Typography';



const Services = () => {

    const services = [
        {
            name: 'Fluroide Treatment',
            description: "habijabi onek habijabi habi jabai dfasdfkjas odf;j asdf;lk asd fka sdj fl ;sd kfj ; asldf kjaslkf als   ;dfkjas;ld kfjasf asf",
            img: fluoride
        },
        {
            name: 'Cavity filling',
            description: "habijabi onek habijabi habi jabai dfas dfk jaso df;jasdf;lkasdf k asdjfl;s dkf j;asldfk jaslk fjals ;dfkj as ;ldkfja sfasf",
            img: cavity
        },
        {
            name: 'Teeth whitening',
            description: "habijabi onek habijabi habi jabai dfasd fkjaso f;jasdf;lk asd fkasdjfl;s dkfj ;asldfk jaslkf jals;df kjas; ldkfjasfasf",
            img: whitening
        },
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography sx={{ color:"success.main" }} variant="h6" compoent="div">
                Our services
            </Typography>
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" compoent="div">
                Our services
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                services.map(service =>
                    <Service 
                    service={service}
                    key={service.name}></Service>
                )
            }
            </Grid>
        </Container>
      </Box>
    );
};

export default Services;