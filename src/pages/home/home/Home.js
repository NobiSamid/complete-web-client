import React from 'react';
import AppointmentBanner from '../appointmentBanner/AppointmentBanner';
import Banner from '../banner/Banner';
import Doctors from '../doctors/Doctors';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <h3>this is home page</h3>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;