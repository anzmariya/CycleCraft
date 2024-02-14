import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { addToBookedBike, approvedBikeById, approvedBikes, deleteBookedBike, getUserApi } from '../Backend/allApi';

import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [bikeId,setBikeId] = useState({})
  const [bike, setBike]=useState({})
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [user, setUser] = useState({});
  const [total, setTotal] = useState(0);
  const nav=useNavigate()
  const location=useLocation()
  
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const bikeIdFromUrl = params.get('bike');
    console.log('Location State:', location.state); // Check if bike details are in location state
    console.log('Bike Id from URL:', bikeIdFromUrl); // Check bikeId from URL
    
    console.log(location.state);
    
    const bikeId=location.state
    setBikeId(bikeId)
    getBikeDetails(bikeId)
  }, [location.search, location.state]);

  // Rest of your Checkout component logic...


  // The rest of your Checkout component logic...

  const getBikeDetails = async (bikeId) => {
    try {
      const res = await approvedBikeById(bikeId);
      console.log(res.data);
      setBike(res.data)
    } catch (error) {
      console.error('Error fetching bike details:', error);
    }
  };
 


  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    calculateNumberOfDays(event.target.value, endDate);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    calculateNumberOfDays(startDate, event.target.value);
  };

  const calculateNumberOfDays = (start, end) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);

    if (!isNaN(startDateObj.getTime()) && !isNaN(endDateObj.getTime())) {
      const timeDiff = endDateObj - startDateObj;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      setNumberOfDays(daysDiff);
    } else {
      // Handle invalid dates
      setNumberOfDays(0);
    }
  };

  // const handleDelete = async(e,bikeId)=>{
  //   const delres = await deleteBookedBike(bikeId);
  //   console.log(delres);
  // }

  useEffect(()=>{
    const total = Math.ceil([50+Number(numberOfDays)*Number(bike?.ppd)])
    setTotal(total)
  },[calculateNumberOfDays,bike])

  // const calculatetotal = async (userId) => {
  //   try {
  //     // Fetch approved bikes
  //     const res = await approvedBikes(userId);
  //     console.log(res.data);
  //     setBike(res.data)

  //   } catch (error) {
  //     console.error('Error while fetching approved bikes:', error);
  //   }
  // };

    // const selectedBike = async(userId)=>{
    //   // const token = sessionStorage.getItem("token");
    //   // const headers={
    //   //   Authorization: `Bearer ${token}`
    //   // };
    //   // const bikeId = bike ? bike._id : null; // Use bike state safely
    //   // const uId = userId;
    //   // const res = await addToBookedBike(bikeId, uId, null, headers);
    //   console.log(bike);
    // }
  

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
                        pnum: existingUser.phoneNumber,
                        userId: existingUser._id
                        // Add additional details from the API response if needed
                    });
                    // calculatetotal(existingUser._id)

                    
                    
                })
                .catch((error) => {
                    console.error('Error fetching user details:', error);
                    
                });
        }
        else{
          Swal.fire({
            title: "error",
            text: "Oops..",
            icon: "Please Login",
          });
          setTimeout(() => {
            nav('/login')
          }, 3000);
          
        }
        // calculatetotal()
        // selectedBike(existingUser?._id)
        
    }, []);


  return (
    <div>
      <Header/>
      <div className='d-flex justify-content-center align-items-center'>
        <div className="row shadow rounded m-5" style={{width:"800px"}}>
          <div className="col-md-6 mt-5 ps-5">
            <form>
     
              <div className='d-flex'>
                <i class="fa-solid fa-user fa-2x me-1 mt-1"></i>
                <input type="text" placeholder='User Name' value={user.username} className='form-control w-100' />
              </div>

              <div className='d-flex mt-3'>
                <i class="fa fa-envelope fa-2x me-1 mt-1"></i>
                <input type="text" placeholder='E-mail' value={user.email} className='form-control w-100' />
              </div>
  
              <div className='d-flex mt-3'>
                <i class="fa fa-address-card-o fa-2x me-1 mt-1"></i>
                <input type="text" placeholder='City' value={user.address} className='form-control w-100' />
              </div>
  
              <div className='mt-3'>
                <div className='d-flex'>
                  <label htmlFor="startDate"><span className='fs-5 me-2'>Start Date: </span></label>
                  <input type="date" className='form-control w-100' id="startDate" value={startDate} onChange={handleStartDateChange} />
                </div>
                <div className='d-flex mt-3'>
                  <label htmlFor="endDate"><span className='fs-5 me-2'>End Date:</span></label>
                  <input type="date" className='form-control w-100' id="endDate" value={endDate} onChange={handleEndDateChange} />
                  {/* <p>Number of Days: {numberOfDays}</p> */}
                </div>
              </div>
  
              <div className='w-100 mt-3'>
                <span>Payment</span>
                <div className='d-flex justify-content-between'>
                  <div>
                    <span>{bike.compname} {bike.modelname}</span>
                  </div>
                  <div>
                    <span>{bike.ppd} ₹</span>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <span>GST :</span>
                  <span>50 ₹</span>
                </div>
                <div className='d-flex justify-content-between'>
                  <span>Rent for {numberOfDays} days :</span>
                  <span>{total-50} ₹</span>
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                  <span>Total Amount :</span>
                  <span>{numberOfDays?total:0} ₹</span>
                </div>
              </div>
  
                  
                
              
            </form> 
          
          </div>
  
          <div className="col-md-6 mt-5 ps-5">
            
              <label htmlFor="" className='fs-5'>Accepted Cards:</label>
              <div>
                <i class="fa fa-cc-visa fa-2x" style={{color:"navy"}}></i>
                <i class="fa fa-cc-amex ms-3 fa-2x" style={{color:"blue"}}></i>
                <i class="fa fa-cc-mastercard ms-3 fa-2x" style={{color:"red"}}></i>
                <i class="fa fa-cc-discover ms-3 fa-2x" style={{color:"orange"}}></i>
              </div>
  
              <label for="cname" className='fs-5 mt-3'>Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe" className='form-control w-100'></input>
  
              <label for="ccnum" className='fs-5 mt-3'>Credit card number</label>
              <input type="text" id="ccnum" className='form-control w-100' name="cardnumber" placeholder="1111-2222-3333-4444"></input>
  
              <label for="expmonth" className='fs-5 mt-3'>Exp Month and Year</label>
              <input type="text" id="expmonth" className='form-control w-100' name="expmonth" placeholder="MM/YY"></input>
  
              <label for="cvv" className='fs-5 mt-3'>CVV</label>
              <input type="text" id="cvv" className='form-control w-100' name="cvv" placeholder="352"></input>
          </div> 
          <button type='button' className='btn btn-success mt-3 w-100' data-bs-toggle="modal" data-bs-target="#exampleModal">Payment</button>
          
      
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex justify-content-center align-items-center flex-column">
                  <div className='mb-3'>
                    <img src="https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png" height={'200px'} width={'200px'} alt="" />
                  </div>
                  <span style={{fontSize:"large",fontWeight:"bolder"}}>{total} ₹</span>
                  Transation Completed Successfully.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Done</button>
            
                </div>
              </div>
            </div>
          </div>




        </div> 
      </div>
    </div>   
              
  





    
  )
}
  

export default Checkout;