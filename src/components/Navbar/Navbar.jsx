import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './styles.css';

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <h1>AmplifyMe</h1>
        </div>
        <ul>
            <NavLink to="/" className="li"><HomeIcon style={{ fill: 'gray' }} /> </NavLink>
            <NavLink to="/" className="li"> <AddCircleIcon style={{ fill: 'gray' }}  /> </NavLink>
            <NavLink to="/messages" className="li"> <MailIcon  style={{ fill: 'gray' }} /></NavLink>
            <NavLink to="/" className="li"><NotificationsIcon style={{ fill: 'gray' }} /> </NavLink>
            <NavLink to="/" className="li"><AccountCircleIcon style={{ fill: 'gray' }} /></NavLink>
        </ul>
    </nav>      
);
};

export default Navbar;
