import React, { useEffect, useState } from 'react';
import './home.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { approvedBikes, getAllBikes } from '../Backend/allApi';
import { baseURL } from '../Backend/serverURL';
import Card from './Card';
import Contact from './Contact';
// import ride from'../riding.png';

function Home() {
    const [uName,setUname] = useState("")
    const [bikes, setBikes] = useState([]) 
    console.log(uName);

    useEffect(()=>{
        setUname(JSON.parse(sessionStorage.getItem("existingUser"))?.username)
    },[JSON.parse(sessionStorage.getItem("existingUser"))?.username])

   const handleLogout=()=>{
    setUname("");
   }

   const displayFirst3bike = async () => {
    try {
      const res = await approvedBikes();
      setBikes(res.data.slice(0,3));
    } catch (error) {
      console.error('Error fetching bikes:', error);
    }
  };

   useEffect(()=>{
    displayFirst3bike()
   },[])
    
  return (
    
    <div>
        {/* section 1 */}
        <Header onlogout={handleLogout}/>
        {/* landing session- section 2 */}
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active"  data-bs-interval="2000">
                <img src="https://w0.peakpx.com/wallpaper/451/158/HD-wallpaper-riding-high-sunset-biker-motorcycle-white-line-highway-rider-ride-bike-road-firefox-persona-theme.jpg" height={'500vh'} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block bgdiv">
                    {uName?<h3 className='text-warning'>Hi, {uName}</h3>:<h3>Hi, User</h3>}
                    <p className='text-light'>Let's Find A Perfect Ride For U.</p>
                </div>
                </div>
                <div class="carousel-item"  data-bs-interval="2000">
                <img src="https://w0.peakpx.com/wallpaper/884/467/HD-wallpaper-bike-desert-triumph-thunderbird-triumph.jpg" class="d-block w-100" height={'500vh'} alt="..."/>
                <div class="carousel-caption d-none d-md-block bgdiv">
                    {uName?<h3 className='text-warning'>Hi, {uName}</h3>:<h3>Hi, User</h3>}
                    <p className='text-light'>Let's Find A Perfect Ride For U.</p>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="https://super73.com/cdn/shop/collections/Super73_LP_OTA_Fuctionality_4e9ccdcc-da22-4499-83c8-deac2a457629.jpg?v=1666047750" class="d-block w-100" height={'500vh'} alt="..."/>
                <div class="carousel-caption d-none d-md-block bgdiv">
                    {uName?<h3 className='text-warning'>Hi, {uName}</h3>:<h3>Hi, User</h3>}
                    <p className='text-light'>Let's Find A Perfect Ride For U.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div>

        </div>

        {/*section 3 */}
        <div className='container-fluid d-flex justify-content-center align-items-center'>
        {bikes?.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3">
          {bikes.map((bike) => (
            <div className="cardbg my-3 d-flex justify-content-center align-items-center" key={bike.id}>
              <div className="card" style={{ width: '25rem',height:'550px' }}>
                <img
                  src={`${baseURL}/fileuploads/${bike.image}`}
                  className="card-img-top"
                  alt="no bike image"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="text-dark me-2">{bike.compname}</span>
                    <span className="text-danger">{bike.modelname}</span>
                  </h5>
                  <p className='text-dark'>Price per day : {bike.ppd}</p>
                  <p className="card-text text-dark">{bike.des}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a className="btn btn-primary" key={bike._id} onClick={(e) => displayFirst3bike(e,bike)}>
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

        {/* section 4 */}
        
        <Contact/>
        <Card/>
        <Footer/>
    </div>
  );
}

export default Home;
