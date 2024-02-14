import React, { useEffect, useState } from 'react';
import { getUserApi } from '../Backend/allApi';
import Usernavbar from './Usernavbar';


function UserDash() {
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
        <div className='d-flex'>
            <div>
                <Usernavbar/>
            </div>
            <div className="row">
            
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/scooter-bike-sale-banner-design-template-95aaca06d9f32d8cb99752032351a5c9_screen.jpg?ts=1672581141" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default UserDash;
