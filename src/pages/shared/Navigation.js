import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { styled, alpha } from '@mui/material/styles';
import { Menu, MenuItem } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const Navigation = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const { user, logout } = useAuth();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMobile);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" style={{ flex: 1, textAlign: "left" }}>
                        Doc
                    </Typography>
                    {/* <NavLink style={{ textDecoration: "none", color: 'whitesmoke' }} to="/">
                        Home
                    </NavLink>
                    <NavLink style={{ textDecoration: "none", color: 'whitesmoke' }} to="/appoinment">
                        Appoinment
                    </NavLink> */}
                    {/* {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: "none", color: 'whitesmoke' }} to="/dashboard">
                                    Dashboard
                                </NavLink>
                                <Button onClick={logout} color="inherit">Log-Out</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: "none", color: 'whitesmoke' }} to="/login">
                                <Button color="inherit">Log-in</Button>
                            </NavLink>
                    } */}
                    <Box style={{ width: "40%" }}>
                        {isMobile ? (<>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <NavLink style={{ textDecoration: "none", color: 'black' }} to="/">
                                        Home
                                    </NavLink>
                                </MenuItem>
                                <MenuItem>
                                    <NavLink style={{ textDecoration: "none", color: 'black' }} to="/appoinment">
                                        Appoinment
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    {
                                        user?.email ?
                                            <>
                                                <NavLink style={{ textDecoration: "none", color: 'black' }} to="/dashboard">
                                                    Dashboard
                                                </NavLink>
                                                <Button onClick={logout} color="inherit">Log-Out</Button>
                                            </>
                                            :
                                            <NavLink style={{ textDecoration: "none", color: 'black' }} to="/login">
                                                <Button color="inherit">Log-in</Button>
                                            </NavLink>
                                    }
                                </MenuItem>
                            </Menu>
                        </>) :
                            (
                                <Box style={{ display: 'flex' }} sx={{ justifyContent: 'space-evenly', alignItems: 'center' }} >
                                    <NavLink style={{ textDecoration: "none", color: 'whitesmoke' }} to="/">
                                        Home
                                    </NavLink>

                                    <NavLink style={{ textDecoration: "none", color: 'whitesmoke' }} to="/appoinment">
                                        Appoinment
                                    </NavLink>
                                    {
                                        user?.email &&
                                        <NavLink style={{ textDecoration: "none", color: 'whitesmoke' }} to="/dashboard">
                                            Dashboard
                                        </NavLink>
                                    }
                                    {
                                        user?.email ?
                                            <Button onClick={logout} color="inherit">log-out</Button>
                                            :
                                            <NavLink style={{ textDecoration: "none", color: 'whitesmoke' }} to="/login">
                                                <Button color="inherit">Log-in</Button>
                                            </NavLink>
                                    }
                                </Box>
                            )}

                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;