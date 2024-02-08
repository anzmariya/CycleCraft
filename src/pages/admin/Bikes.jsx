import React, { useEffect, useState } from 'react';
import { addApproved, deleteBike, getAllBikes, getUserApi } from '../../Backend/allApi';
import { baseURL } from '../../Backend/serverURL';
import Viewbike from '../Viewbike';
import { Link } from 'react-router-dom';

function Bikes() {
  const [bikes, setBikes] = useState([]);
  const [users, setUsers] = useState([]);

  const viewAdminBikes = async () => {
    try {
      const res = await getAllBikes();
      console.log(res.data);
      setBikes(res.data);
    } catch (err) {
      console.log('Error fetching bikes:', err);
    }
  };

  const fetchUsers = async () => {
    try {
      const result = await getUserApi();
      console.log(result.data);
      setUsers(result.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  const handleApproveAndDelete = async (bikeId) => {
    try {
      // Call your API to update the approval status
      await addApproved(bikeId);

      // Call your API to delete the bike
      await deleteBike(bikeId);

      // Update the local state to reflect the changes
      setBikes((prevBikes) =>
        prevBikes.filter((bike) => bike._id !== bikeId)
      );

      console.log(bikes);
    } catch (err) {
      console.error('Error approving and deleting bike:', err);
    }
  };

 

  useEffect(() => {
    const fetchData = async () => {
      await viewAdminBikes();
      await fetchUsers();
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='row'>
        <div className='col-md-2 col-lg-2 col-sm-2 tabcolor d-flex justify-content-center align-items-center flex-column' style={{ height: '100vh' }}>
        <img className='rounded-circle' height={'150px'} width={'150px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFWUYSjxPsy-SzB-U45Sq8xCKjArKbgn58A&usqp=CAU" alt="" />
            <h4>Administrator</h4>
            <p>cyclecraftadmin@gmail.com</p>

            <Link to={"/users"}><h5><i class="fa-solid fa-user"></i> Users</h5></Link>
            <Link to={"/admin-bikes"}><h5><i class="fa-solid fa-motorcycle"></i> Bikes</h5></Link>
            <Link to={'/'}><h5><i class="fa-solid fa-power-off"></i> Logout</h5></Link>

        </div>

        <div className='col-md-10'>
          {bikes?.length > 0 ? (
            <div className='row row-cols-1 row-cols-md-2'>
              {bikes.map((bike) => {
                const user = users.find((user) => user._id === bike.userId);
                const uName = user ? user.username : 'Unknown User';
                const pnum=user? user.phoneNumber : 'Unknow Number'

                return (
                  <div key={bike.id} className='col'>
                    <div className='cardbg'>
                      <div className='card bg-dark mx-5 my-3' style={{height:"700px"}}>
                        <img src={`${baseURL}/fileuploads/${bike.image}`} className='card-img-top' alt='...' />
                        <div className='card-body'>
                          <h5 className='card-title'>
                            <span className='text-light me-2'>{bike.compname}</span>
                            <span className='text-danger'>{bike.modelname}</span>
                          </h5>
                          <div className='card-text text-light'>
                            <p>Added by: {uName}</p>
                            <p>Contact number : {pnum}</p>
                            <p>Bike city: {bike.bikecity}</p>
                            <p>Price per day: {bike.ppd} ₹</p>
                            <p>About: {bike.des}</p>
                          </div>
                          <div className='d-flex justify-content-between align-items-center'>
                          <button onClick={() => handleApproveAndDelete(bike._id)} className='btn btn-primary'>
                            Approve</button>
                            

                            
                              <button type='button' className='btn btn-danger'>
                                Reject
                              </button>

                              
                                      
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Nothing to Display</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bikes;
