import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Header({onlogout}) {
    const [uName,setUname] = useState("")
    const nav = useNavigate()
    
    console.log(uName);

    const handleLogout=()=>{
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("token")
        setUname("")
        onlogout();
        nav('/')
    }

    useEffect(()=>{
            setUname(JSON.parse(sessionStorage.getItem("existingUser"))?.username)
    },[JSON.parse(sessionStorage.getItem("existingUser"))?.username])
        
    

  return (
    <div className='bg-dark'>
        <nav class="navbar navbar-expand-lg navv">
            <div class="container">
                <a class="navbar-brand text-warning" href="#"><i class="fa-solid fa-motorcycle fa-2x"></i><span style={{fontFamily: 'Great Vibes, cursive',fontSize:'xx-large'}}>CycleCraft</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-lg-0">
                        <li class="nav-item"><a class="nav-link text-light active" aria-current="page" href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="/about">About</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="/add-bikes">Add Bike</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="/all-bikes">Bike Rental</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="/contact">Contact Us</a></li>
                        

                        <li>
                            {!uName?<div>
                                <button type='button' className='btn btn-primary text-light' ><a href='/login' className='text-light text-decoration-none'>Sign In</a></button>
                            </div>:
                        <div class="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-user me-2"></i>{uName}
                            </button>
                            {uName && <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" onClick={handleLogout}>Logout <i class="fa-solid fa-power-off"></i></a>
                                <a class="dropdown-item" href="/user/dashboard">Profile</a>
                            </div>}
                            </div>}
                        </li>
                   
                    
                   
                   
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header