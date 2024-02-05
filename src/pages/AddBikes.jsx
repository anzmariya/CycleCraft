import React, { useEffect, useState } from 'react'
import { addBikeApi } from '../Backend/allApi';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';



function AddBikes() {

  const navigate = useNavigate()
  const[preview,setPreview]=useState("")
  const [token,setToken]=useState()
  
  const [bikeDetails,setBikeDetails]=useState({
    compname:"",
    modelname:"",
    ppd:"",
    des:"",
    bikeCity:"",
    image:""
  })
  // console.log(bikeDetails);

  useEffect(()=>{
    if(bikeDetails.image){
      setPreview(URL.createObjectURL(bikeDetails.image))
    }
  },[bikeDetails.image])
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])

  const addBikeDetails=async(e)=>{
    e.preventDefault()
    const{compname,modelname,ppd,des,image,bikecity}=bikeDetails

    if(!compname || !modelname || !ppd || !des || !image || !bikecity){
      alert("Please Fill the Form Completely")
    }
    else{
      const reqBody=new FormData()
      reqBody.append('compname',compname)
      reqBody.append('modelname',modelname)
      reqBody.append('ppd',ppd)
      reqBody.append('des',des)
      reqBody.append('bikecity',bikecity)
      reqBody.append('image',image)
      

      if(token){
        const reqHeader ={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        const res=await addBikeApi(reqBody,reqHeader)
        console.log(res);
        if(res.status===200){
          alert("Added")

          setTimeout(() => {
            navigate("/")
          }, 1000);
          
        }
        else{
          console.log(res.response.data);
        }
      }
    }
  }
 

 
  // console.log(preview);

  return (
    <div className='mb-5'>
      <Header/>
      <h2 className='mb-5 mt-5 d-flex justify-content-center align-items-center'>Add Your Bike For Rent </h2>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <form className='d-flex justify-content-center align-items-center flex-column shadow p-5'>
        
        <label className='text-center mt-3 position-relative'>
          <img src={preview?preview:"https://img.freepik.com/free-vector/hand-drawn-motorcycle-isolated-white-background-monochrome-style_1284-38728.jpg?w=826&t=st=1706898878~exp=1706899478~hmac=dac97a2e48a63dd345eb9e7907b1bfdaf53b0fec730970b66e6e56cf909e5a7f"} height={'300px'} width={'300px'} alt="" />
          <input onChange={(e)=>setBikeDetails({...bikeDetails,image:e.target.files[0]})} type="file" style={{display:'none'}} />
          <i className="fa-solid text-tertiary fa-plus fa-3x"></i>
        </label>
          
        <div className='d-flex justify-content-between w-100'>
          <select value={bikeDetails.compname} onChange={(e)=>setBikeDetails({...bikeDetails,compname:e.target.value})} class="form-control form-select me-2 rounded shadow" aria-label="Default select example">
            <option selected>Company Name</option>
            <option value="Hero">Hero</option>
            <option value="Honda">Honda</option>
            <option value="Bajaj">Bajaj</option>
          </select>
  
          <input value={bikeDetails.modelname} onChange={(e)=>setBikeDetails({...bikeDetails,modelname:e.target.value})} className='form-control ms-2 rounded shadow' type="text" placeholder='Model Name' />
        </div>

        <input value={bikeDetails.bikecity} onChange={(e)=>setBikeDetails({...bikeDetails,bikecity:e.target.value})} className='form-control mt-3 w-100 rounded shadow' type="text" placeholder='Bike Location' />

        <input value={bikeDetails.ppd} onChange={(e)=>setBikeDetails({...bikeDetails,ppd:e.target.value})} className='form-control mt-3 w-100 rounded shadow' type="text" placeholder='Price per day' />

        <input value={bikeDetails.des} onChange={(e)=>setBikeDetails({...bikeDetails,des:e.target.value})} className='form-control mt-3 w-100 rounded shadow' placeholder='Bike Description' type="text" />

        

        <button type='button' className='btn btn-success mt-3' onClick={addBikeDetails}>Submit</button>

      </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      
    </div>
  )
}

export default AddBikes