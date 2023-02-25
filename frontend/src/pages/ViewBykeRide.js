import React, {useEffect, useState} from 'react'
import TopNav from '../Components/Header/TopNav'
import './ViewBike.css'
import Axios from '../Static/Axios'
function ViewBykeRide() {
    const [bikeRides,setBikerides] = useState([])
        useEffect(() => {
            Axios.get('/getBykeRides').then((response)=>{
                    console.log(response.data,"bike rides")
                    setBikerides(response.data)
            })
        }, [])
        
  return (
    <>
         <TopNav/>
   
    <div className='box'>
                        <h1>BIKE <span style={{color:"red"}}>RIDES</span></h1>
                        <div className='boxContainer'>
    
                        {
                          bikeRides.map((obj)=>{
                            return(
                              <div className='card'>
                                    <img src="https://cdn4.vectorstock.com/i/1000x1000/45/38/biker-riding-a-motorcycle-cartoon-vector-21024538.jpg" alt='byke.jpg'/>
                                    <button className='ReserveBtn'>Reserve Ride</button>
                                    <p><i>{obj.startingPlace}</i></p>
                                               To
                                    <p><i>{obj.endingPlace}</i></p>
                                <div className='time'><p><i>{obj.startingTime}</i></p>{obj.endingTime}</div>
                              </div> 
                            )
                          })
                        }
            </div>
    </div>
    </>
  )
}

export default ViewBykeRide