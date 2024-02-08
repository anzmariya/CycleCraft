import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { loginApi, registerApi } from '../Backend/allApi';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';

function Register({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: ""
  });

  const navigate = useNavigate();

  console.log(userData);

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, phoneNumber, address } = userData;

    if (!username || !email || !password || !confirmPassword || !phoneNumber || !address) {
      alert("Please Fill the Form Completely");
    } else {
      const result = await registerApi(userData);
      console.log(result);
      if (result.status === 200) {
        alert("Successfully Registered");
        setUserData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: "",
          address: ""
        });
        navigate('/login');
      } else {
        alert(result.response.data);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;

    if (!email || !password) {
      alert('Please fill the form completely');
    } else {
      const res = await loginApi(userData);
      console.log(res);

      if (res.status === 200) {
        alert('success');
        sessionStorage.setItem('existingUser', JSON.stringify(res.data.existingUser));

        sessionStorage.setItem('token', res.data.token);

        setUserData({
          email: "",
          password: ""
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        alert(res.response.data);
      }
    }
  };

  const loginForm = login ? true : false;

  return (
    <div className='d-flex justify-content-center align-items-center img-fluid' style={{ backgroundImage: 'url("https://saltandfuessel-websites-files.s3.ap-southeast-2.amazonaws.com/swanninsurance/wp-content/uploads/2021/03/18111448/shutterstock_560497675.jpg")', backgroundRepeat: 'no-repeat', height: '100vh', width: "100%", backgroundSize: "cover" }}>
      <div className='d-flex justify-content-center align-items-center flex-column divbg'>
      <div>
        <h1>{!loginForm ? <div className='pt-4' style={{paddingLeft:"100px",paddingRight:"100px"}}>Register Here</div> : <div className='d-flex w-100' style={{height:"100px"}}>
                <h4 className='bg-success text-light  w-100 d-flex justify-content-center align-items-center ps-5 pe-5' style={{height:"80px"}}>User Login</h4>
                <Link to="/admin-login" className='text-decoration-none text-light bg-dark w-100 d-flex justify-content-center align-items-center pe-5' style={{height:"80px",paddingLeft:"100px"}}><h4 className='d-flex justify-content-center align-items-center'>Admin Login</h4></Link>
              </div> }</h1>
      </div>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <form className='d-flex justify-content-center align-items-center flex-column'>

            
            {!loginForm && <TextField className='w-100 mt-2' value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} id="outlined-basic" label="User Name" variant="outlined" />}

            <TextField className='w-100 mt-2' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} id="outlined-basic" label="E-mail" variant="outlined" />

            <TextField className='w-100 mt-2' value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} id="outlined-basic" label="Password" variant="outlined" />

            {!loginForm && <TextField className='w-100 mt-2' value={userData.confirmPassword} onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })} id="outlined-multiline-flexible" label="Confirm Password" variant="outlined" />}

            {!loginForm && <TextField className='w-100 mt-2' value={userData.phoneNumber} onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })} id="outlined-basic" label="Phone Number" variant="outlined" />}

            {!loginForm && <TextField className='w-100 mt-2' value={userData.address} onChange={(e) => setUserData({ ...userData, address: e.target.value })} id="outlined-basic" label="City" variant="outlined" />}

            {!loginForm ? <button onClick={handleRegister} className='btn btn-success d-flex justify-content-center align-items-center w-100 p-2 mt-3 mb-2' type="button"><a href='/login' style={{ textDecoration: 'none', color: 'white' }}>Register</a></button> :

              <button onClick={handleLogin} className='btn mt-2 btn-success d-flex justify-content-center align-items-center w-100 p-2' type="button"><a href='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</a></button>}

          </form>

          {!loginForm ?
            <div className='mt-2'>
              <span>Already a User?</span>
              <a href='/login'>Login</a>
            </div> :
            <div className='mt-2 mb-4'>
              <span>New User?</span>
              <a href='/register'>Register</a>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Register;