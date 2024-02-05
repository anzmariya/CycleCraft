import React from 'react'
import './allbikes.css'
import Header from '../components/Header'
import Viewbike from './Viewbike'

function Allbikes() {
  return (
    <div className='m-0 mb-0'>
        <Header/>
        <div className='cardbg mb-0'>
            <h1 className='d-flex justify-content-center align-items-center text-light'>Bikes for Rent</h1>
            <div class="card bg-dark mx-5" style={{width: "25rem"}}>
                <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Honda-Bikes-Livo-130120211542.jpg&w=386&h=256&q=90&c=1" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title"><span className='text-light me-2'>BikeName</span><span className='text-danger'>ModelName</span></h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <a href="#" class="btn btn-primary">Book Now</a>
                        

                        <div className=''>
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        View Bike
                        </button>


                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <Viewbike/>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        
        </div>
    </div>

  )
}

export default Allbikes