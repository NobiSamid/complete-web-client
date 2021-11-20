import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Appoinments = ({ date, setDate }) => {
    const { user, token } = useAuth();
    const [appoinments, setAppoinments] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        console.log(url);
        // const url = `https://intense-gorge-28690.herokuapp.com/appoinmtents?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppoinments(data))
    }, [date, user.email, token])
    console.log(appoinments);
    let { path, url } = useRouteMatch();
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
                            <TableCell align="left">Action</TableCell>
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
                                <TableCell align="left">
                                    {row.payment ? 'Paid' :
                                        <Link style={{ textDecoration: "none", color: 'Black' }} to={`/dashboard/payment/${row._id}`}>
                                            <Button> Click here to pay</Button>
                                        </Link>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appoinments;