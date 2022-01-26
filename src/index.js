import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import Feed from './components/Feed/Feed.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar/Navbar.jsx';

ReactDOM.render(
  <Router>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/feed" element={<Feed />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
