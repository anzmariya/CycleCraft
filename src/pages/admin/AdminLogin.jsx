import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminLogin() {
    const [adminData,setAdminData]=useState({
        email:"",
        password:""
    })
  return (
    <div className='d-flex justify-content-center align-items-center img-fluid' style={{ backgroundImage: 'url("https://saltandfuessel-websites-files.s3.ap-southeast-2.amazonaws.com/swanninsurance/wp-content/uploads/2021/03/18111448/shutterstock_560497675.jpg")', backgroundRepeat: 'no-repeat', height: '100vh', width: "100%", backgroundSize: "cover" }}>
      <div className='d-flex justify-content-center align-items-center flex-column divbg'>

      <div>
      <div className='d-flex w-100' style={{height:"100px"}}>
                
                <Link to="/login" className='text-decoration-none text-light bg-dark w-100 d-flex justify-content-center align-items-center ps-5 pe-5' style={{height:"80px"}}><h4 className='d-flex justify-content-center align-items-center'>User Login</h4></Link>
                <h4 className='bg-success text-light  w-100 d-flex justify-content-center align-items-center ps-5 pe-5' style={{height:"80px"}}>Admin Login</h4>
              </div>
                
      </div>
      
        <form className='d-flex jusify-content-center align-items-center flex-column'>
          

          <TextField className='w-100 mt-4' value={adminData.email} onChange={(e)=>setAdminData({...adminData,email:e.target.value})} id="outlined-basic" label="E-mail" variant="outlined" />

          <TextField className='w-100 mt-3' value={adminData.password} onChange={(e)=>setAdminData({...adminData,password:e.target.value})} id="outlined-basic" label="Password" variant="outlined"/>
          
          <button className='btn btn-success d-flex justify-content-center align-items-center w-100 p-2 mt-3 mb-5' type="button"><a href='/admin/dashboard' style={{textDecoration:'none',color:'white'}}>Login</a></button>

        </form>

        
      </div>        
    </div>
  )
}

export default AdminLogin