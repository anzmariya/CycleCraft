import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { loginApi, registerApi } from '../Backend/allApi';
import { useNavigate } from 'react-router-dom';


function Register({login}) {
  
  const [userData,setUserData]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
    phoneNumber:"",
    address:""
  })

  const navigate=useNavigate()

  console.log(userData);
  const handleRegister = async(e)=>{
    e.preventDefault()
    const{username,email,password,confirmPassword,phoneNumber,address}=userData

    if(!username || !email || !password || !confirmPassword || !phoneNumber || !address){
      alert("Please Fill the Form Completely")
    }
    else{
      const result=await registerApi(userData)
      console.log(result);
      if(result.status==200){
        alert("Successfully Registered")
        setUserData({
          username:"",
          email:"",
          password:"",
          confirmPassword:"",
          phoneNumber:"",
          address:""
        })
        navigate('/login')
      }
      else{
        alert(result.response.data)
      }
    }
  }

  const handleLogin = async(e)=>{
    e.preventDefault()
    const {email,password}=userData

    if(!email || !password){
      alert('Please fill the form completely')
    }else{
      const res=await loginApi(userData)
      console.log(res);

      if(res.status==200){
        alert('success')
        sessionStorage.setItem('existingUser',JSON.stringify(res.data.existingUser))

        sessionStorage.setItem('token',res.data.token)

        setUserData({
            email:"",
            password:""
          })

          setTimeout(()=>{
            navigate('/')
          },2000)
      }
      else{
        alert(res.response.data)
      }
    }
  }

  const loginForm=login?true:false

  return (
    <div className='d-flex jusify-content-center align-items-center flex-column'>
      
        <form className='d-flex jusify-content-center align-items-center flex-column'>
          <h1>{!loginForm?'Register Here':'Login Here'}</h1>
          {!loginForm &&<TextField className='w-100 mt-2' value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} id="outlined-basic" label="User Name" variant="outlined" />}

          <TextField className='w-100 mt-2' value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} id="outlined-basic" label="E-mail" variant="outlined" />

          <TextField className='w-100 mt-2' value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} id="outlined-basic" label="Password" variant="outlined"/>
          
          {!loginForm &&<TextField className='w-100 mt-2' value={userData.confirmPassword} onChange={(e)=>setUserData({...userData,confirmPassword:e.target.value})} id="outlined-multiline-flexible" label="Confirm Password" variant="outlined" />}

          {!loginForm &&<TextField className='w-100 mt-2' value={userData.phoneNumber} onChange={(e)=>setUserData({...userData,phoneNumber:e.target.value})} id="outlined-basic" label="Phone Number" variant="outlined" />}

          {!loginForm &&<TextField className='w-100 mt-2' value={userData.address} onChange={(e)=>setUserData({...userData,address:e.target.value})} id="outlined-basic" label="Address" variant="outlined" />}

          {!loginForm ? <button onClick={handleRegister} className='btn btn-success d-flex justify-content-center align-items-center w-100 p-2' type="button"><a href='/login' style={{textDecoration:'none',color:'white'}}>Register</a></button>

          :<button onClick={handleLogin} className='btn btn-success d-flex justify-content-center align-items-center w-100 p-2' type="button"><a href='/login' style={{textDecoration:'none',color:'white'}}>Login</a></button>}

        </form>

        {!loginForm ?
        <div>
          <span>Already a User?</span>
          <a href='/login'>Login</a>
        </div>
        :
        <div>
          <span>New User?</span>
          <a href='/register'>Register</a>
        </div>
        }

              
    </div>
  )
}

export default Register