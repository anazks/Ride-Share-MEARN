import React, { useState } from 'react'
import './Banner.css'
import { UserContext } from '../../Static/userContext'

function Banner() {
        const [user,setUser] = useState(UserContext)
  return (
       
    <div className="banner">
                        
            <div className='byke'>
                    <img  src="https://thumbs.gfycat.com/PastelCalculatingArmadillo-max-1mb.gif" alt="" />
                <div className='content'>
                        <h2>Find a Bike Ride</h2>
                        <button>Find New</button>
                </div>
                
            </div>
            
            <div className='car'>
                    <img  src="https://media.tenor.com/u6W2jKHboGAAAAAC/car.gif" alt="" />
                    <div className='content'>
                        <h2>Find a Car Ride</h2>
                        <button>Find New</button>
                </div>
           </div>
           
    </div>
  )
}

export default Banner