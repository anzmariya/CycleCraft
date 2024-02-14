import React from 'react'
import './admin.css'
import AdminDash from './AdminDash'
import { Link, useNavigate } from 'react-router-dom'

function VerticalTabs() {
  const nav =useNavigate()

  const handleLogout=()=>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    nav('/')
}
  return (
    <div className='row'>
        <div className='col-md-2 tabcolor d-flex justify-content-center align-items-center flex-column' style={{height:"100vh"}}>
            <img className='rounded-circle' height={'150px'} width={'150px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFWUYSjxPsy-SzB-U45Sq8xCKjArKbgn58A&usqp=CAU" alt="" />
            <h4>Administrator</h4>
            <p>cyclecraftadmin@gmail.com</p>

            <Link to={"/users"}><h5><i class="fa-solid fa-user"></i> Users</h5></Link>
            <Link to={"/admin-bikes"}><h5><i class="fa-solid fa-motorcycle"></i> Bikes</h5></Link>
            <button onClick={handleLogout} className='btn'><h5><i class="fa-solid fa-power-off"></i> Logout</h5></button>
        </div>

        <div className='col-md-10'>
            <AdminDash/>
        </div>
       
    </div>
  )
}

export default VerticalTabs