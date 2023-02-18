import React, { useState,useEffect,useContext } from 'react'
import Axios from '../../Static/Axios'
import './Banner.css'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { UserContext } from '../../Static/userContext'

function Banner() {
        const {user,setUser} = useContext(UserContext)
        const [Redes,setRide]= useState([])
        useEffect(() => {
                if(user){
                let riderId = localStorage.getItem('Authinfo')
                if(riderId){
                   riderId =JSON.parse(riderId)._id
                   console.log(riderId)
                }
                Axios.get(`/myRide/${riderId}`).then((response)=>{
                        console.log(response.data)
                        setRide(response.data)
                })
                }
        },[Redes])
        const finishTrip=(id)=>{
                console.log(id,"ride Id")
                Axios.get(`/finishTrip/${id}`).then((response)=>{
                        console.log(response.data)
                })
        }
        
  return (
       
    <div className="banner">
                                 <h1> <span className='your'>YOUR</span> <span>RIDES</span></h1>
                                { user ?
                        
                                        <div className='myRides'>
                                                       
                                                <div className='contents'>
                                                       
                                                        {
                                                                Redes.map((obj)=>{
                                                                return(
                                                                        <div>

                                                                                <p><i>{obj.startingPlace} To <spa>
                                                                                </spa>  {obj.endingPlace}</i></p> 
                                                                                <button onClick={()=>finishTrip(obj._id)} className='finish'>Finish Trip</button>

                                                                        </div>
                                                                        )
                                                                })
                                                        }
                                                </div>
                                                {/* <div className='progressBar'>
                                                                <div className='innerDiv'>
                                                                        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                                                                <CircularProgress color="secondary" />
                                                                                <CircularProgress color="success" />
                                                                                <CircularProgress color="inherit" />
                                                                        </Stack>
                                                                </div>
                                                </div> */}
                                        </div>
                                : "" }
        <div className='cards'>
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
           
    </div>
  )
}

export default Banner