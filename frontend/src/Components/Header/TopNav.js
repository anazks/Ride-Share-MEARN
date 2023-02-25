import React, { useState,useRef, useContext  } from 'react'
import Axios from '../../Static/Axios'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { UserContext } from '../../Static/userContext';
import {Routes,Route,Link,useNavigate} from 'react-router-dom'

import './Header.css'
import Header from './Header';
function TopNav() {
    const {user,setUser} = useContext(UserContext)
    const [open, setOpen] = useState(false);
    const [openLogin,setLoginOpen] = useState(false)
    const [Wrongpassword,setPassword] = useState(false)
     const handleClickOpen = () => {
        setOpen(true);
      };
      const nameRef = useRef();
      const emailRef = useRef()
      const passwordRef = useRef()
      const mobile = useRef();
      const CpasswordRef =useRef()
      const handleClose = () => {
        setOpen(false);
      };
      const openLoginFn = () => {
        setLoginOpen(true)
      };
      const colseLoginFn=()=>{
        setLoginOpen(false)
      }
      function handleLogin(data){
        console.log("loginData",data)
      }
      function logout(){
        localStorage.removeItem('Authinfo');
        setUser(null)
      }
      function handlesubmit(e){
       
        e.preventDefault(); 
            if(openLogin==false){
              let loginData ={
                password:passwordRef.current.value,
                email:emailRef.current.value,
              }
              Axios.post('/Login',loginData).then((response)=>{
                console.log("----",response.data[0].userName)
                let userData ={
                  username:response.data[0].userName,
                  email:response.data[0].email,
                  mobile:response.data[0].mobile,
                  _id:response.data[0]._id
                }
                const storageStr = JSON.stringify(userData);
                localStorage.setItem("Authinfo", storageStr);
                
              
                const dataStr = localStorage.getItem('Authinfo');
                  if(dataStr){
                    console.log("from local storage",JSON.parse(dataStr))
                    setUser(userData)
                  }
                  
                
                handleClose();
                console.log("login")
              })
            }else{
             
              let data ={
                userName:nameRef.current.value,
                password:passwordRef.current.value,
                email:emailRef.current.value,
                mobile:mobile.current.value
            }
            console.log(data)
              Axios.post('/signUp',data).then((response)=>{
                console.log("----",response.data)
                handleClose();
                console.log("signup")
              })
            }
              
           
      }
  return (
    <div className='topNav'>
        <ul>
            <li> <img className='logo' src='https://www.ridesharing.com/en-ca/images/Logo_CV_EN.png'/></li>
            <li> <a href='/' className='home'>Home</a> </li>
            <li><a href='/RideRequest' className='home'>Ride Request</a></li>
            <li><a href=''className='home'>Approved Rides</a> </li>
            {
              user ? "" : <li onClick={handleClickOpen}>Login</li>
            }
            
            {user ? 
            <li><div class="dropdown">
                  <span>{user ? user.username :""}</span>
                  <div class="dropdown-content">
                  <p onClick={()=>logout()}>Logout</p>
                  </div>
                </div>
            </li>
           :"" }
        </ul>
       
        <Dialog onClose={handleClose} open={open} className="formTop">
            
            <form className='loginForm' onSubmit={handlesubmit}>
                    <div className="input_group">       
                                <label>Email</label>
                    <input type="text" ref={emailRef} />
                    <div className="input_group">
                                <label>Password</label>
                    <input type="password" ref={passwordRef} />
                    {
                        openLogin ?
                        <div className="input_group">
                          {
                            Wrongpassword ?<label> Password Missmatch</label>: <label>Confirm Password</label>
                          }
                            
                              <input type="password" ref={CpasswordRef} />
                              <div className="input_group" placeholder='Name'>
                           <label>User Name</label>
                              <input type="text" ref={nameRef} />
                              <label>Mobile</label>
                              <input type="text" ref={mobile} />
                        </div>
                        </div>
                        
                        : ""
                      }
                    </div>
                    </div>
                    <input className='submitBtn' type="submit" />
                    {
                      openLogin ? 
                      <p><i>Existing user? <span className='createNew' onClick={colseLoginFn}>Login to your account</span> </i></p>
                      :
                      <p><i>New user? <span className='createNew' onClick={openLoginFn}>create New Account</span> </i></p>
                      
                      
                    }
            
    </form>
       


    </Dialog>
                   
    </div>
  )
}

export default TopNav