import React, { useState, useEffect } from 'react';
import './allbikes.css';
import Header from '../components/Header';
import Viewbike from './Viewbike';
import { addBooked, approvedBikes } from '../Backend/allApi';
import { baseURL } from '../Backend/serverURL';
import { useNavigate } from 'react-router-dom';

function Allbikes() {
  const [bikes, setBikes] = useState([]);
  const [selectedBike,setSelectedBike]=useState({})
  const nav=useNavigate()

  // const handleSelectedBike = (e, bikeId) => {
  //   e.preventDefault();
  //   console.log(bikeId);
  //   setSelectedBike(bikeId);
  //   alert(selectedBike);
  // }

  const handleSelectedBike = async (bikeId) => {
    try {
      // Call your API to update the approval status
      await addBooked(bikeId);
      console.log(bikeId);
      nav('/checkout')
    } catch (err) {
      console.error('Error while booking bike:', err);
    }
  };

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const res = await approvedBikes();
        setBikes(res.data);
      } catch (error) {
        console.error('Error fetching bikes:', error);
      }
    };

    fetchBikes();
  }, []);

  return (
    <div className="m-0 mb-0">
      <Header />
      <h1 className="d-flex justify-content-center align-items-center text-dark">Bikes for Rent</h1>

      {bikes?.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3">
          {bikes.map((bike) => (
            <div className="cardbg my-4" key={bike.id}>
              <div className="card bg-dark mx-5" style={{ width: '25rem',height:'550px' }}>
                <img
                  src={`${baseURL}/fileuploads/${bike.image}`}
                  className="card-img-top"
                  alt="no bike image"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="text-light me-2">{bike.compname}</span>
                    <span className="text-danger">{bike.modelname}</span>
                  </h5>
                  <p className='text-light'>Price per day : {bike.ppd}</p>
                  <p className="card-text text-light">{bike.des}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a className="btn btn-primary" onClick={() => handleSelectedBike(bike._id)}>
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
  );
}

export default Allbikes;
