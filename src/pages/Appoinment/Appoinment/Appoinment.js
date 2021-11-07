import React from 'react';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvilableAppoinments from '../AvilableAppoinments/AvilableAppoinments';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvilableAppoinments date={date}></AvilableAppoinments>
        </div>
    );
};

export default Appoinment;