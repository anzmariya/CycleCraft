import React, { useEffect, useState } from 'react'
import { getAllBikes } from '../../Backend/allApi'
import { baseURL } from '../../Backend/serverURL'


function Bikes() {
    const[bikes,setBikes]=useState([])

    const viewAdminBikes=async()=>{
        const res=await getAllBikes()
        console.log(res.data);
        setBikes(res.data)
    }

    const deleteItem=async()=>{
      
    }
    
    useEffect(()=>{
        viewAdminBikes()
    },[])

  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope='col'>id</th>
      <th scope="col">User Name</th>
      <th scope="col">Company Name</th>
      <th scope="col">Model Name</th>
      <th scope="col">Bike Location</th>
      <th scope="col">Price Per Day</th>
      <th scope="col">Bike Description</th>
      <th scope="col">Bike Image</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {bikes?.length>0?bikes.map((item)=>(
        <tr>
        <td>id</td>
        <td>username</td>
        <td>{item.compname}</td>
        <td>{item.modelname}</td>
        <td>{item.bikecity}</td>
        <td>{item.ppd}</td>
        <td>{item.des}</td>
        <td><img src={`${baseURL}/fileuploads/${item.image}`} alt='no image' height={'200px'} width={'200px'}/></td>
        <td>
          <button className='btn btn-outline-success'><i class="fa-solid fa-check"></i></button>
           <button onClick={deleteItem} className='btn btn-outline-danger'><i class="fa-solid fa-trash"></i></button>
        </td>
  
      </tr>
    ))
    :<p>Nothing to display</p>}
  </tbody>
</table>
    </div>
  )
}

export default Bikes