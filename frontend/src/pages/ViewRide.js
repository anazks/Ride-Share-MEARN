import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner/Banner';
import Header from '../Components/Header/Header';
import TopNav from '../Components/Header/TopNav';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './view.css'
import Axios from '../Static/Axios'
function ViewRide() {
  const [rides,setRides] = useState([])
  useEffect(() => {
        var user = localStorage.getItem('Authinfo');
            user = JSON.parse(user)
            if(user){
              console.log(user._id,"viewride")
              Axios.get(`/myRide/${user._id}`).then((response)=>{
                console.log(response.data)
                setRides(response.data)
              })
            }else{
              console.log("no-login")
            }
    }, [])
    
  return (
    <div>
        <TopNav/>
        <div className='TableContainer'>

      
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>RIDE MODE</TableCell>
            <TableCell align="right">STARTING TIME</TableCell>
            <TableCell align="right">ENDING TIME</TableCell>
            <TableCell align="right">PASSENGERS</TableCell>
            <TableCell align="right">STARTING PLACE</TableCell>
            <TableCell align="right">ENDING PLACE</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rides.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.rideMode}
              </TableCell>
              <TableCell align="right">{row.startingTime}</TableCell>
              <TableCell align="right">{row.endingTime}</TableCell>
              <TableCell align="right">{row.passengers}</TableCell>
              <TableCell align="right">{row.startingPlace}</TableCell>
              <TableCell align="right">{row.endingPlace}</TableCell>
              <TableCell align="right"><button className='deleteBtn'>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  )
}

export default ViewRide