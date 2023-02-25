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
import Axios  from '../Static/Axios';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import './view.css'


function RideRequest() {
    const [rides,setRides] = useState([])
    const [open, setOpen] = React.useState(false);
    const [bookedUser,setBookedUser] =useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    useEffect(() => {
        var user = localStorage.getItem('Authinfo');
            user = JSON.parse(user)
            if(user){
              console.log(user._id,"viewride")
              GetRides(user);
            }else{
              console.log("no-login")
            }
    }, [])
    const GetRides = (user) =>{
        Axios.get(`/myRides/${user._id}`).then((response)=>{
            console.log(response.data)
            setRides(response.data)
          })
    }
    const viewUser =(userId)=>{
        setOpen(true);
        Axios.get(`/viewUser/${userId}`).then((response)=>{
            console.log(response.data[0],"userss id")
            setBookedUser(response.data[0])
          })  
    }
    const ActionPlay = (data)=>{
            console.log(data)
            Axios.post(`/bookedAction`,data).then((response)=>{
                console.log(response.data)
                GetRides();
              }) 
    }
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
        <TableCell align="right">STATUS</TableCell>
        <TableCell align="right">Action</TableCell>
        <TableCell align="right">VIEW</TableCell>
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
          <TableCell align="right">{row.status}</TableCell>
          <TableCell align="right">{row.endingPlace}</TableCell>
          <TableCell align="right">
            <button className='AcceptBTN' onClick={()=>ActionPlay({accept:true,id:row._id})}>Accept</button>
            <button className='deleteBtn' onClick={()=>ActionPlay({accept:false,id:row._id})}>Reject</button>
          </TableCell>
          <TableCell align="right"><button className='viewBTN' onClick={()=>viewUser(row.bookedUser)}>View User</button></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</div>




<div>
      <br />
      {
        bookedUser ?  
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                <div className='profileCard'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt=""/>
                        <p> <p><b>User Name</b> :{bookedUser.userName}</p> </p>
                        <p> <p><b>Contact</b> : {bookedUser.mobile}</p> </p>
                            <button>Wave</button>
                </div>
            </DialogTitle>
        </Dialog> :
                    <Dialog onClose={handleClose} open={open}>
                            <DialogTitle>Nouser</DialogTitle>
                    </Dialog>
      }
   
    </div>

</div>
  )
}

export default RideRequest