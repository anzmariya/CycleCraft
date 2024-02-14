import React from 'react'
import { AddedBikesById } from '../Backend/allApi';
import { useState , useEffect} from 'react';
import Usernavbar from './Usernavbar';
import { baseURL } from '../Backend/serverURL';

function UserAddedBikes() {
  const [userId, setUserId] = useState("");
  const [bikes, setBikes] = useState([]);
  const [token,setToken] = useState("")


 
  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setToken(sessionStorage.getItem('token'));
      const id = (JSON.parse(sessionStorage.getItem('existingUser'))._id)
      console.log(id);
      setUserId(id)
    }

    getAddedBikes(userId);
  }, [userId, token]);

  const getAddedBikes = async (userId) => {
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`
      };
      console.log(token);

      try {
        const res = await AddedBikesById(userId, reqHeader);
        console.log(userId);
        console.log(res);

        if (res.status === 200) {
          setBikes(res.data);
        } else {
          console.log(res.response.data);
        }
      } catch (error) {
        console.error('Error fetching user Bikes:', error);
      }
    }
  };

  return (
    <div className='d-flex'>
      <div>
        <Usernavbar/>
      </div>
      <div className='container'>
        <h1 className="d-flex justify-content-center align-items-center text-dark">Added Bikes</h1>
  
        {bikes?.length > 0 ? (
          <div className="container-fluid row row-cols-1 row-cols-md-3">
            {bikes.map((bike) => (
              <div className="cardbg my-3 d-flex justify-content-center align-items-center" key={bike.id}>
                <div className="card bg-dark" style={{ width: '25rem', height: '550px' }}>
                  <img src={`${baseURL}/fileuploads/${bike.image}`} className="card-img-top" alt="no bike image" />
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="text-light me-2">{bike.compname}</span>
                      <span className="text-danger">{bike.modelname}</span>
                    </h5>
                    <p className='text-light'>Price per day : {bike.ppd}</p>
                    <p className='text-light'>Bike Owner : {bike.bikeAddedBy}</p>
                    <p className='text-light'>Bike Rented by : {bike.userId}</p>
                    <p className="card-text text-light">{bike.des}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <a className="btn btn-primary" key={bike._id}>
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Nothing to display</p>
        )}
      </div>
    </div>
  );
}

export default UserAddedBikes