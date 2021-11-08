import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {

    const {user, logout} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doc
                    </Typography>
                    <NavLink style={{textDecoration:"none", color:'whitesmoke'}} to="/">
                        Home
                    </NavLink>
                    <NavLink style={{textDecoration:"none", color:'whitesmoke'}} to="/appoinment">
                        Appoinment
                    </NavLink>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{textDecoration:"none", color:'whitesmoke'}} to="/dashboard">
                                    Dashboard
                                </NavLink>
                                <Button onClick={logout} color="inherit">Log-Out</Button>
                            </Box>
                        :
                        <NavLink style={{textDecoration:"none", color:'whitesmoke'}} to="/login">
                            <Button color="inherit">Log-in</Button>
                        </NavLink>
                    }
                  
                </Toolbar>
            </AppBar>
    </Box>
    );
};

export default Navigation;