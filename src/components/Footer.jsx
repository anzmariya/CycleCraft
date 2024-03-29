import React from 'react'
import './footer.css'

function Footer() {
  return (
    
<footer class="text-center text-light bg-dark">
  
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="mb-4">
          <a class="text-warning text-decoration-none" href="#"><i class="fa-solid fa-motorcycle fa-2x"></i><span style={{fontFamily: 'Great Vibes, cursive',fontSize:'xx-large'}}>CycleCraft</span></a>
          </h6>
          <p>
            Cycle Craft its a bike rendering application. Where users can rent bike, also post their bike for rendering. From this users can earn money and enjoy their ride. 
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            POPULAR LOCATIONS
          </h6>
          <p>
            <a href="#!" class="text-reset">Kerala</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Mumbai</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Banglore</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Chennai</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> India, IN 10012</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@cyclecraft.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="#">AnzMariyaDavis</a>
  </div>
</footer>

  )
}

export default Footer