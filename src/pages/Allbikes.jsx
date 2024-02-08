import React, { useState, useEffect } from 'react';
import './allbikes.css';
import Header from '../components/Header';
import Viewbike from './Viewbike';
import { approvedBikes } from '../Backend/allApi';
import { baseURL } from '../Backend/serverURL';

function Allbikes() {
  const [bikes, setBikes] = useState([]);
  const [selectedBike,setSelectedBike]=useState("")

  const handleSelectedBike = (e, bikeId) => {
    e.preventDefault();
    console.log(bikeId);
    setSelectedBike(bikeId);
    alert(selectedBike);
  }

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
                    <a href="/checkout" className="btn btn-primary" onClick={(e) => handleSelectedBike(e,bike._id)}>
                      Book Now
                    </a>

                    <div className="">
                      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#exampleModal${bike.id}`}>
                        View More
                      </button>

                      <div className="modal fade" id={`exampleModal${bike.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${bike.id}`} aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                          <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title">{bike.compname} - {bike.modelname}</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <Viewbike />
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
