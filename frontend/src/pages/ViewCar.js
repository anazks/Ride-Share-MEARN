import React, {useEffect, useState} from 'react'
import TopNav from '../Components/Header/TopNav'
import './ViewBike.css'
import Axios from '../Static/Axios'

function ViewCar() {
    const [carRides,setcarRides] = useState([])
    const [booked,setBooked] = useState();
    const [user,setUser] =useState()
    const [rideId,setRideid] = useState();
        useEffect(() => {
          var userData = localStorage.getItem('Authinfo')
          userData = JSON.parse(userData)
          setUser(userData)
          getCarRide();
           
        }, [])
        const  getCarRide=()=>{
          Axios.get(`/getCarRides`).then((response)=>{
            console.log(response.data,"bike rides") 
                setcarRides(response.data)
            })
        }
        
const BookRide=(id)=>{
    console.log(id,"boooking id")
    var userData = localStorage.getItem('Authinfo')
        userData = JSON.parse(userData)
        setUser(userData)
          userData.Rideid = id;
    Axios.post('/bookRide',userData).then((response)=>{
        console.log(response.data.RideID)
        setRideid(response.data.RideID)
        
    })
}
const cancelBooking =(id)=>{
    Axios.get(`/cancelBooking/${id}`).then((response)=>{
        console.log(response)
        getCarRide();
    })
}
  return (
    <>
    <TopNav/>

<div className='box'>
                   <h1>CAR <span style={{color:"red"}}>RIDES</span></h1>
                   <div className='boxContainer'>

                   {
                     carRides.map((obj)=>{
                    
                      { if(obj.bookedUser == user._id || obj._id==rideId){
                            return(
                              <div className='card'>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40eMrxwy9IPru8hhuXMJCZt1CLbiHgYCFTw&usqp=CAU" alt='byke.jpg'/>
                              <button className='ReserveBtn' >Booked</button>
                              <button className='CancelBtn' onClick={()=>cancelBooking(obj._id)} >Cancel</button>
                              <p><i>{obj.startingPlace}</i></p>
                                         To
                              <p><i>{obj.endingPlace}</i></p>
                          <div className='time'><p><i>{obj.startingTime}</i></p>{obj.endingTime}</div>
                        </div> 
                             
                            )
                      }else{
                          return(
                            <div className='card'>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40eMrxwy9IPru8hhuXMJCZt1CLbiHgYCFTw&usqp=CAU" alt='byke.jpg'/>
                              <button className='ReserveBtn' onClick={()=>BookRide(obj._id)}>Reserve Ride</button>
                              <p><i>{obj.startingPlace}</i></p>
                                         To
                              <p><i>{obj.endingPlace}</i></p>
                          <div className='time'><p><i>{obj.startingTime}</i></p>{obj.endingTime}</div>
                        </div> 
                              
                          )
                      }}
                       return(
                         <div className='card'>
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40eMrxwy9IPru8hhuXMJCZt1CLbiHgYCFTw&usqp=CAU" alt='byke.jpg'/>
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

export default ViewCar