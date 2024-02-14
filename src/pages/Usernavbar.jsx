import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import { getUserApi } from '../Backend/allApi';


function Usernavbar() {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Retrieve user information from sessionStorage
        const existingUser = JSON.parse(sessionStorage.getItem('existingUser'));
        if (existingUser) {
            // Fetch additional user details using getUserApi if needed
            // You can customize the getUserApi call based on your backend API
            getUserApi(existingUser.id)
                .then((response) => {
                    // Assuming response.data contains additional user details
                    setUser({
                        username: existingUser.username,
                        address: existingUser.address,
                        email: existingUser.email,
                        pnum: existingUser.phoneNumber
                        // Add additional details from the API response if needed
                    });
                })
                .catch((error) => {
                    console.error('Error fetching user details:', error);
                });
        }
    }, []);
  return (
    <div>
        <Sidebar style={{height:'100vh',backgroundColor:'white'}} className='shadow'>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src="https://cdn-icons-png.freepik.com/256/3033/3033143.png" className='d-flex justify-content-center align-items-center' width={'200px'} alt="" />
                <h6>{user.username}</h6>
                <h6>{user.email}</h6>
                <h6>{user.pnum}</h6>
            </div>
        <Menu className='mt-5'
         menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              ['&.active']: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}>
    {/* <SubMenu label="Charts">
      <MenuItem component={<Link to="/admin-dashboard"/>}> Dashboard </MenuItem>
    </SubMenu> */}
    <MenuItem component={<Link to="/"/>}>Home</MenuItem>
    <MenuItem component={<Link to="/all-bikes"/>}>All Bikes</MenuItem>
    <MenuItem component={<Link to="/bookings"/>}>Booked Bikes</MenuItem>
    <MenuItem component={<Link to="/addedBikes"/>}>Posted Bikes</MenuItem>
    <MenuItem component={<Link to="/admin-login"/>}>Logout</MenuItem>
  </Menu>
        </Sidebar>
    </div>
  )
}

export default Usernavbar