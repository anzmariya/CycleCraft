import React, { useEffect, useState } from 'react';
import './home.css'
import Header from '../components/Header';
// import ride from'../riding.png';

function Home() {
    const [uName,setUname] = useState("")
    console.log(uName);

    useEffect(()=>{
        setUname(JSON.parse(sessionStorage.getItem("existingUser"))?.username)
    },[JSON.parse(sessionStorage.getItem("existingUser"))?.username])

   const handleLogout=()=>{
    setUname("");
   }
    
  return (
    // <div>
        
    //   <div className="rounded">
    //         home
    //         <div className="row gx-4 gx-lg-5 align-items-center" style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/809524.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    //         <div className="col-lg-7">
    //             <img className="slide-in img-fluid rounded mb-4 mb-lg-0" height={400} width={900} src={ride} alt="..." />
    //         </div>
    //         <div className="col-lg-5 bgdiv">
    //             <h1 className="font-weight-light">Hi, User!</h1>
    //             <h1 className="font-weight-light">LET'S FIND A PERFECT RIDE FOR YOU.</h1>
    //             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste possimus, doloribus quisquam ipsam at inventore qui modi aperiam excepturi quidem est expedita molestiae nam fugit enim obcaecati voluptatem quam? Totam!</p>
    //             <a className="btn btn-warning" href="#!">Call to Action!</a>
    //         </div>
    //     </div>
    //         {/* ABOUT */}
    //         <div class="row gx-4 gx-lg-5 align-items-center my-5 shadow bg-dark rounded">
    //             <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" height={400} width={900} src="https://img.freepik.com/free-vector/hand-drawn-motorcycle-isolated-white-background-monochrome-style_1284-38728.jpg?w=826&t=st=1706207405~exp=1706208005~hmac=cf7285aab3a9057b55aa740bc7baeeae5d58f3f90778874576044018337926e9" alt="..." /></div>
    //             <div class="col-lg-5 text-light">
    //              <h1 class="font-weight-light">ABOUT</h1>
    //                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste possimus, doloribus quisquam ipsam at inventore qui modi aperiam excepturi quidem est expedita molestiae nam fugit enim obcaecati voluptatem quam? Totam!</p>
    //                 <a class="btn btn-warning" href="#!">Get Started</a>
    //             </div>
    //         </div>
    //         {/* features */}
    //         <div className='row gx-4 gx-lg-5'>
    //         <h1 className='d-flex justify-content-center align-items-center'>Why Choose Us</h1>
    //         <div class="col-xs-12 col-sm-6 col-md-4 mt-3">
    //             <div class="image-flip" >
    //                 <div class="mainflip flip-0">
    //                     <div class="frontside">
    //                         <div class="card">
    //                             <div class="card-body text-center">
    //                                 <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"></img></p>
    //                                 <h4 class="card-title">Best Price</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.</p>
    //                                 <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="backside">
    //                         <div class="card">
    //                             <div class="card-body text-center mt-4">
    //                                 <h4 class="card-title">Best Price</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
    //                                 <ul class="list-inline">
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-facebook"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-twitter"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-skype"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-google"></i>
    //                                         </a>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <!-- ./Team member -->
    //         <!-- Team member --> */}
    //         <div class="col-xs-12 col-sm-6 col-md-4">
    //             <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    //                 <div class="mainflip">
    //                     <div class="frontside">
    //                         <div class="card">
    //                             <div class="card-body text-center">
    //                                 <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png" alt="card image"></img></p>
    //                                 <h4 class="card-title">Fast and Safe</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.</p>
    //                                 <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="backside">
    //                         <div class="card">
    //                             <div class="card-body text-center mt-4">
    //                                 <h4 class="card-title">Fast and Safe</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
    //                                 <ul class="list-inline">
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-facebook"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-twitter"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-skype"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-google"></i>
    //                                         </a>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <!-- ./Team member -->
    //         <!-- Team member --> */}
    //         <div class="col-xs-12 col-sm-6 col-md-4">
    //             <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    //                 <div class="mainflip">
    //                     <div class="frontside">
    //                         <div class="card">
    //                             <div class="card-body text-center">
    //                                 <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png" alt="card image"></img></p>
    //                                 <h4 class="card-title">Safe and Sanitised Vehicle</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.</p>
    //                                 <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="backside">
    //                         <div class="card">
    //                             <div class="card-body text-center mt-4">
    //                                 <h4 class="card-title">Safe and Sanitised Vehicle</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
    //                                 <ul class="list-inline">
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-facebook"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-twitter"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-skype"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-google"></i>
    //                                         </a>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <!-- ./Team member -->
    //         <!-- Team member --> */}
    //         <div class="col-xs-12 col-sm-6 col-md-4">
    //             <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    //                 <div class="mainflip">
    //                     <div class="frontside">
    //                         <div class="card">
    //                             <div class="card-body text-center">
    //                                 <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_04.jpg" alt="card image"></img></p>
    //                                 <h4 class="card-title">Instant and Secure Payments</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.</p>
    //                                 <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="backside">
    //                         <div class="card">
    //                             <div class="card-body text-center mt-4">
    //                                 <h4 class="card-title">Instant and Secure Payments</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
    //                                 <ul class="list-inline">
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-facebook"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-twitter"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-skype"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-google"></i>
    //                                         </a>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <!-- ./Team member -->
    //         <!-- Team member --> */}
    //         <div class="col-xs-12 col-sm-6 col-md-4">
    //             <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    //                 <div class="mainflip">
    //                     <div class="frontside">
    //                         <div class="card">
    //                             <div class="card-body text-center">
    //                                 <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png" alt="card image"></img></p>
    //                                 <h4 class="card-title">Complementary Helmet</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.</p>
    //                                 <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="backside">
    //                         <div class="card">
    //                             <div class="card-body text-center mt-4">
    //                                 <h4 class="card-title">Complementary Helmet</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
    //                                 <ul class="list-inline">
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-facebook"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-twitter"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-skype"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-google"></i>
    //                                         </a>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <!-- ./Team member -->
    //         <!-- Team member --> */}
    //         <div class="col-xs-12 col-sm-6 col-md-4">
    //             <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
    //                 <div class="mainflip">
    //                     <div class="frontside">
    //                         <div class="card">
    //                             <div class="card-body text-center">
    //                                 <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg" alt="card image"></img></p>
    //                                 <h4 class="card-title">Fully Insured Ride</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.</p>
    //                                 <a href="https://www.fiverr.com/share/qb8D02" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div class="backside">
    //                         <div class="card">
    //                             <div class="card-body text-center mt-4">
    //                                 <h4 class="card-title">Fully Insured Ride</h4>
    //                                 <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
    //                                 <ul class="list-inline">
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-facebook"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-twitter"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-skype"></i>
    //                                         </a>
    //                                     </li>
    //                                     <li class="list-inline-item">
    //                                         <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
    //                                             <i class="fa fa-google"></i>
    //                                         </a>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         </div>


       
   
    


    
    
    

            
    //     </div>
    // </div>

    <div>
        <Header onlogout={handleLogout}/>
        {/* landing session */}
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
    </div>
  );
}

export default Home;
