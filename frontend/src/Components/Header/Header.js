import React, { useState,useContext } from 'react'
import './Header.css'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { UserContext } from '../../Static/userContext';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import AddRide from '../forms/AddRide';

function Header() {

  const [open, setOpen] = React.useState(false);
  const [openRide, setOpenRide] = React.useState(false);
  const handleOpenAddRide = () => setOpenRide(true);
  const handleCloseRide = () => setOpenRide(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {user,setUser} = useContext(UserContext)
  const [alert,setAlert]= useState(false)
  function hanldeLogin(){
    console.log("alertng...")
    handleClickOpen()
    const myTimeout = setTimeout(alertEnding, 3000);
    }
    function alertEnding() {
      handleClose()
    }
    const style = {
      position: 'absolute',
      top: '46%',
      left: '55%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'transperant',
      
    
    };
  return (
    <div className='Head'>
      
          <h1> <span style={{color:"red"}}>Ride</span> <span>Share</span></h1>
          <h4 style={{color:"white"}}>Share Your Ride.Driving alone hurts your wallet and your health.Enjoy RideShare</h4>
          <div className="buttons">
            {
              user ? <button className='addRide'  onClick={handleOpenAddRide}>Add Ride</button>
               : 
              <button className='addRide' onClick={hanldeLogin}>Add Ride</button>
            }
            {
              user ?   <button className='viewRide'>View Rides</button>
               : 
               <button className='viewRide' onClick={hanldeLogin}>View Ride</button>
            }
            
              
          </div>


          <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><Stack>
          <Alert severity="error">
            <AlertTitle>LOGIN TO CONTINUE</AlertTitle>
            This Action need Login— <strong>check it out!</strong>
          </Alert>
        </Stack></DialogTitle>
      
          

      </Dialog>


      <Modal
        keepMounted
        open={openRide}
        onClose={handleCloseRide}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            ADD RIDE
          </Typography>
          <Typography id="keep-mounted-modal-description">
                <AddRide/>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Header