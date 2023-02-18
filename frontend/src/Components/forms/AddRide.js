import Axios from '../../Static/Axios';
import React, { useRef } from 'react'

import './AddRide.css'
function AddRide({setOpenRide}) {
  const   rideMOdeRef =  useRef();
  const   startPlaceRef = useRef();
  const   arrivalPlaceRef = useRef();
  const   startTimeRef = useRef();
  const   endTimeRef = useRef();
  const   priceRef = useRef();
  const  allowedpassengerRef = useRef();
 
  let riderId = localStorage.getItem('Authinfo')

  if(riderId){
     riderId =JSON.parse(riderId)._id
    console.log()
  }
    
    // let userData = JSON.parse(riderId)
    // let Rid = userData._id;
  function handlesubmit(e){
      e.preventDefault()
      let data = {
              rideMode:rideMOdeRef.current.value,
              startingTime:startTimeRef.current.value,
             endingTime:endTimeRef.current.value,
              startingPlace:startPlaceRef.current.value,
              endingPlace:arrivalPlaceRef.current.value,
              payments:priceRef.current.value ,
              passengers:allowedpassengerRef.current.value,
              riderID:riderId
      }
      console.log(data)
      Axios.post('/addRide',data).then((response)=>{
        console.log("added Ride",response)
        if(response.data.success){
          setOpenRide(false)
        }
       
      })
      
  }

  return (
    <div>
             <form className='loginForm' onSubmit={handlesubmit}>
                    <div className="input_group">       
                                <label>SELECT RIDE MODE</label>
                                <br></br>
                        <select className='mode' ref={rideMOdeRef}>
                            <option>Byke</option>
                            <option>Car</option>
                        </select>
                    <div className="input_group">
                                <label>Departure Place</label>
                    <input type="text" ref={startPlaceRef} />
                        <div className="input_group">
                    <label>Arrival Place</label>
                        <input type="text" ref={arrivalPlaceRef}  />
                    <div className="input_group" placeholder='Name'>
                           <label>Departure Date</label>
                              <input type="datetime-local" ref={startTimeRef}/>
                              <label>Arrival Date</label>
                              <input type="datetime-local" ref={endTimeRef} />
                              <label>Price</label>
                              <input type="text" ref={priceRef} />
                              <label>Allowed Passengers</label>
                              <input type="number" ref={allowedpassengerRef} />
                        </div>
                        </div>
                    </div>
                    </div>
                    <input className='submitBtn' type="submit" value="ADD RIDE" />              
    </form>
    </div>
  )
}

export default AddRide