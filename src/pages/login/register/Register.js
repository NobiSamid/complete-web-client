import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();  

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('password didnt match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{mt:10}} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    { !isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField 
                                id="filled-basic" 
                                label="Email" 
                                type="email" 
                                variant="filled"
                                sx={{width:"75%", m: 1}} 
                                name="email"
                                onChange={handleOnChange}

                            /><br/>
                                
                            <TextField 
                                id="filled-basic" 
                                label="Password" 
                                type="password" 
                                variant="filled"
                                sx={{width:"75%" , m: 1}} 
                                name="password"
                                onChange={handleOnChange}
                            /><br/>
                            <TextField 
                                id="filled-basic" 
                                label="Confirm Password" 
                                type="password" 
                                variant="filled"
                                sx={{width:"75%" , m: 1}} 
                                name="password2"
                                onChange={handleOnChange}
                            /><br/>
                            <NavLink style={{textDecoration:"none"}} to="/login">
                                <Button variant="text">Already registered? Please, Login</Button>
                            </NavLink><br/>
                            <Button sx={{width:300, m:1}} type="submit" variant="containerd">Register</Button>

                        </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User successfully Registered</Alert>}
                    {authError &&<Alert severity="error">Authentication failed - {authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:"100%"}} src={login} alt="login preview" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;