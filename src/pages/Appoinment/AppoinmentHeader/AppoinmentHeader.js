import React from 'react';
import Calendar from '../../shared/Calendar';

const AppoinmentHeader = ({date, setDate}) => {

    return (
        <div>
            <h3>hello</h3>
            <Calendar date={date} setDate={setDate}></Calendar>
        </div>
    );
};

export default AppoinmentHeader;