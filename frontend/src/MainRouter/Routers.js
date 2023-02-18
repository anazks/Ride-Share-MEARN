import Layout from '../Components/Layouts/Layout'
// import React, { useState,useEffect,useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import ViewRide from '../pages/ViewRide'
function Routers() {

  return (
    <div>
        <Routes>
            <Route path='/' element={ <Layout/>}/>
            <Route path='/viewRide' element={ <ViewRide /> }/>
        </Routes>
    </div>
  )
}

export default Routers