import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);

        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{mt:10}} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
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
                        <NavLink style={{textDecoration:"none"}} to="/register">
                            <Button variant="text">New user? Please, Register</Button>
                        </NavLink><br/>
                        <Button sx={{width:300, m:1}} type="submit" variant="containerd">Login</Button>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User successfully logged in</Alert>}
                        {authError &&<Alert severity="error">Authentication failed - {authError}</Alert>}
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:"100%"}} src={login} alt="login preview" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;