import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <NavLink
            style={{ textDecoration: 'none', color: 'white', marginRight: '30px', fontSize: '20px'}}
            to= '/'
          >
            Inicio
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none', color: 'white', marginRight: '30px', fontSize: '20px'}}
            to= '/signin'
          >
            Sign In
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none', color: 'white', marginRight: '30px', fontSize: '20px'}}
            to= '/registration'
          >
            Registration
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar;