import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Appoinments = ({date, setDate}) => {
    const {user} = useAuth();
    const [appoinments, setAppoinments] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/appoinments?email=${user.email}&date=${date}`
        fetch(url)
        .then(res => res.json())
        .then(data => setAppoinments(data))
    },[date])
    console.log(appoinments);
    return (
        <div>
            <h1>Appoinments: {appoinments.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Time</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Service</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {appoinments.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.patientName}
                        </TableCell>
                        <TableCell align="left">{row.time}</TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">{row.serviceName}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appoinments;