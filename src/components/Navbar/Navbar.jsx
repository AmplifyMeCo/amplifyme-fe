import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Modal from '../AddPost/Modal.jsx';

import './styles.css';

const Navbar = () => {
    const [open, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(true)
    }

  return (
      <>
    <nav>
        <div className="logo">
            <h1 id="logo">AmplifyMe</h1>
        </div>
        <ul>
            <NavLink to="/" className="li"><HomeIcon style={{ fill: 'gray' }} /> </NavLink>
            <li onClick={handleClick} className="li"> <AddCircleIcon style={{ fill: 'gray' }}  /> </li>
            <NavLink to="/messages" className="li"> <MailIcon  style={{ fill: 'gray' }} /></NavLink>
            <NavLink to="/" className="li"><NotificationsIcon style={{ fill: 'gray' }} /> </NavLink>
            <NavLink to="/" className="li"><AccountCircleIcon style={{ fill: 'gray' }} /></NavLink>
        </ul>
    </nav> 
    <Modal open={open}>
    <div className="modal-card">
        <div className="modal-header">
            <div className="modal-title">Create new intitative</div>
                <button style={{ marginRight: '-65px' }} className="close-button" onClick={() => setIsOpen(false)}>&times;</button>
            </div>
        <div className="modal-body">
            <span><UploadFileIcon style={{ fontSize: '96px' }} /></span>
            <p>Drag and drop videos here</p>
            <input className="custom-file-input" type="file"></input>
        </div>
    </div>
    </Modal>
    </> 
);
};

export default Navbar;
