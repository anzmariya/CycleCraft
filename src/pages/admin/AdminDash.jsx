import React, { useState } from 'react';
import VerticalTabs from './VerticalTabs';

function AdminDash() {
  
  
  
  return (
    <div>
      <div>
        <div class="card" style={{width: "18rem"}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h4 class="card-title">Users</h4>
            <div class="card-text">
              <h5>Number of Users: </h5>
            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div class="card" style={{width: "18rem"}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h4 class="card-title">Bikes</h4>
            <div class="card-text">
              <h4>Total Number of Bikes : </h4>
            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDash