import React, { useEffect, useState } from 'react';
import VerticalTabs from './VerticalTabs';
import { approvedBikes, getUserApi } from '../../Backend/allApi';

function AdminDash() {
  const [numofUsers, setNumofUsers] = useState("")
  const [numofBikes, setNumofBikes] = useState("")
  
  useEffect(()=>{
    const fetchData=async()=>{
      const bikes = await approvedBikes()
      setNumofBikes(bikes.data.length)
      const users = await getUserApi()
      setNumofUsers(users.data.length)
    }

    fetchData()
  },[])
  
  return (
    <div className='container'>
      <div className='d-flex p-4'>
        <div class="card m-3" style={{width: "18rem"}}>
          <img src="https://atlassianblog.wpengine.com/wp-content/uploads/2022/01/2240x1090-1-1560x760.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h4 class="card-title">Users</h4>
            <div class="card-text">
              <h5>Number of Users: </h5>
            </div>
            <a href="#" class="btn btn-primary">{numofUsers}</a>
          </div>
        </div>

        <div class="card m-3" style={{width: "18rem"}}>
          <img src="https://cdni.autocarindia.com/ExtraImages/20210302050600_Best_selling_bikes_in_January_2021.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h4 class="card-title">Bikes</h4>
            <div class="card-text">
              <h4>Total Number of Bikes : </h4>
            </div>
            <a href="#" class="btn btn-primary">{numofBikes}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDash