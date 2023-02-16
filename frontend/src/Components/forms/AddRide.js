import React from 'react'
import './AddRide.css'
function AddRide() {
  return (
    <div>
             <form className='loginForm'>
                    <div className="input_group">       
                                <label>SELECT RIDE MODE</label>
                                <br></br>
                        <select className='mode'>
                            <option>Byke</option>
                            <option>Car</option>
                        </select>
                    <div className="input_group">
                                <label>Departure Place</label>
                    <input type="text" />
                        <div className="input_group">
                    <label>Arrival Place</label>
                        <input type="text"  />
                    <div className="input_group" placeholder='Name'>
                           <label>Departure Date</label>
                              <input type="date"/>
                              <label>Arrival Date</label>
                              <input type="Date" />
                              <label>Price</label>
                              <input type="text" />
                              <label>Allowed Passengers</label>
                              <input type="number" />
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