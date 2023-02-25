import Layout from '../Components/Layouts/Layout'
// import React, { useState,useEffect,useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import ViewRide from '../pages/ViewRide'
import ViewBykeRide from '../pages/ViewBykeRide'
import ViewCar from '../pages/ViewCar'
import RideRequest from '../pages/RideRequest'
function Routers() {

  return (
    <div>
        <Routes>
            <Route path='/' element={ <Layout/>}/>
            <Route path='/viewRide' element={ <ViewRide /> }/>
            <Route path='/viewBikeRide' element={ <ViewBykeRide/> }/>
            <Route path='/viewCarRide' element={ <ViewCar/> }/>
            <Route path='/RideRequest' element={ <RideRequest/> }/>
        </Routes>
    </div>
  )
}

export default Routers