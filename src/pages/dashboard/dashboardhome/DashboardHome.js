import { Grid } from '@mui/material';
import * as React from 'react';
import Calendar from '../../shared/Calendar';
import Appoinments from '../Appoinments/Appoinments';

const DashboardHome = () => {

    const [date, setDate] = React.useState(new Date());

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Calendar
                date={date}
                setDate={setDate}
              ></Calendar>
            </Grid>
            <Grid item xs={12} md={8}>
              <Appoinments
                date={date}
                setDate={setDate}
              ></Appoinments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;