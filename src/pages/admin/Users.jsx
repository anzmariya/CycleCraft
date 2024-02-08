import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserApi } from '../../Backend/allApi'
import zIndex from '@mui/material/styles/zIndex'

function Users() {

  const [users,setUsers] = useState([])

  const viewAllUsers=async()=>{
    const res=await getUserApi()
    console.log(res.data);
    setUsers(res.data)
  }

  useEffect(()=>{
    viewAllUsers()
  },[])

  
  return (
    <div className='row'>
        <div className='col-md-2 tabcolor d-flex justify-content-center align-items-center flex-column' style={{height:"100vh"}}>
            <img className='rounded-circle' height={'150px'} width={'150px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFWUYSjxPsy-SzB-U45Sq8xCKjArKbgn58A&usqp=CAU" alt="" />
            <h4>Administrator</h4>
            <p>cyclecraftadmin@gmail.com</p>

            <><h5><i class="fa-solid fa-user"></i> Users</h5></>
            <Link to={"/admin-bikes"}><h5><i class="fa-solid fa-motorcycle"></i> Bikes</h5></Link>
            <Link to={'/'}><h5><i class="fa-solid fa-power-off"></i> Logout</h5></Link>
        </div>

        <div className='col-md-10'>
            
        

        <div className='col-md-10 d-flex justify-content-center align-items-center mt-5'>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope='col'>Location</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.length>0?users.map((user)=>(
              <tr>
                <th scope="row">1</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.address}</td>
                <td>
                  <button className='btn btn-info me-2'><i class="fa-solid fa-pen-to-square"></i></button>
                  <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                </td>
                
              </tr>)):
              <p>Nothing to display</p>

              
              }
              
            </tbody>
          </table>
        </div>
        </div>
    </div>
  )
}

export default Users