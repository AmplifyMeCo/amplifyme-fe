import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import avatar from '../../assets/icons/avatar.png';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

  return (
      <>
      <div className="container">
          <div className="wrapper">
              <form action="" className="login">
                  <div className="avatar">
                      <img src={avatar} alt="" />
                  </div>
                  <div className="form-data">
                      <input id="email" name="email" type="email" placeholder="Email" onChange={handleChange} />
                  </div>
                  <div className="form-data">
                      <input id="password" name="password" type="password" placeholder="Password" onChange={handleChange} />
                  </div>
                  <div className="login-btn">
                      <button id="login">Login</button>
                  </div>
                  <div className="forgot-pw">
                      <a href="#"><p>Forgot Password</p></a>
                  </div>
                  <div className="signup-btn">
                      <button id="signup">Sign Up</button>
                  </div>
              </form>
          </div>
      </div>
      </>
  );
};

export default Login;
