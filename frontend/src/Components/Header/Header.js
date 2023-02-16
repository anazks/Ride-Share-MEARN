import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='Head'>
          <h1> <span style={{color:"red"}}>Ride</span> <span>Share</span></h1>
          <h4 style={{color:"white"}}>Share Your Ride.Driving alone hurts your wallet and your health.Enjoy RideShare</h4>
          <div className="buttons">
              <button className='addRide'>Add Ride</button>
              <button className='viewRide'>View Ride</button>
          </div>
    </div>
  )
}

export default Header