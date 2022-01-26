import React from 'react';
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
            <li><HomeIcon /> </li>
            <li><AddCircleIcon /> </li>
            <li><MailIcon /></li>
            <li><NotificationsIcon /> </li>
            <li><AccountCircleIcon /></li>
        </ul>
    </nav>      
);
};

export default Navbar;
