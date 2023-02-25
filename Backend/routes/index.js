var express = require('express');
var router = express.Router();
var userModel = require('../Models/userModel')
var rideModel =require('../Models/ridesModel')
var bookRideModel = require('../Models/bookRideMOdel');
const { response } = require('express');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/signUp',(req,res)=>{
  console.log(req.body)
  try {
      userModel.create(req.body)
      res.json(true)
  } catch (error) {
    
  }
})
router.post('/Login', async(req,res)=>{
  console.log(req.body,"login route")
  try {
      let user = await userModel.find({email:req.body.email,password:req.body.password})
      req.session.user=user[0];
      console.log(req.session.user,"logged in")
      res.json(user)
      
  } catch (error) {
      console.log(error)
  }
})
router.post('/addRide', async(req,res)=>{
  let data = req.body;
  console.log(data)
    try {
    await  rideModel.create(data)
    res.json({success:true})
  } catch (error) {
    res.json({success:false})
  }
})
router.get('/myRide/:id', async(req,res)=>{
  let id = req.params.id;
  console.log(id,"riderId")
  try {
      let ridesData = await rideModel.find({riderID:id,status:"default"})
      console.log(ridesData)
      res.json(ridesData)
  } catch (error) {
      res.json({error:true})
  }
})
router.get('/finishTrip/:id', async(req,res)=>{
  let id = req.params.id;
  console.log("----",id)
  try {
    let data = await rideModel.findByIdAndUpdate({_id:id},{$set :{status:"finished"}})
      res.json({success:true})
  } catch (error) {
    console.log(error)
      res.json({success:false})
  }

})
router.get('/getBykeRides', async(req,res)=>{
    try {
    var bikeRides  = await rideModel.find({rideMode:'Byke'})
    res.json(bikeRides)
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})

router.get('/getCarRides', async(req,res)=>{
    try {
    var carRides  = await rideModel.find({rideMode:'Car',status:"available"})
    console.log(carRides)
    res.json(carRides)
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})
router.post('/bookRide', async(req,res)=>{
  console.log(req.body,"book")
  var userID = req.body._id;
  var RideID = req.body.Rideid
  let data = {
    userID,
    RideID
  }
 try {
          await bookRideModel.create(data)
          await rideModel.findByIdAndUpdate({_id:RideID},{$set :{status:"booked",bookedUser:userID}})
          // await rideModel.findByIdAndUpdate({_id:RideID},{$set :{bookedUser:userID}})
            
          res.json({success:true,RideID})
 } catch (error) {
      console.log(error)
      res.json({success:false})
 }
  
})
router.get('/mrBookings/:id',(req,res)=>{
  let id = req.params.id;
  console.log("userid b]from view car",id)
})
router.get('/cancelBooking/:id', async(req,res)=>{
    try {
        await rideModel.findByIdAndUpdate({_id:req.params.id},{$set :{bookedUser:"no",status:"available"}})
        console.log("canceled")
        res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})
router.get('/myRides/:id', async(req,res)=>{
  let id = req.params.id;
  console.log(id,"riderId")
  try {
      let ridesData = await rideModel.find({riderID:id,status:"booked"})
      console.log(ridesData)
      res.json(ridesData)
  } catch (error) {
      res.json({error:true})
  }
})
router.get('/getallmyRides/:id', async(req,res)=>{
  let id = req.params.id;
  console.log(id,"riderId")
  try {
      let ridesData = await rideModel.find({riderID:id})
      console.log(ridesData)
      res.json(ridesData)
  } catch (error) {
      res.json({error:true})
  }
})
router.get('/viewUser/:id', async(req,res)=>{
    let id  = req.params.id;
    try {
        let userData = await userModel.find({_id:id});
        res.json(userData)
    } catch (error) {
        res.json({success:false})
    }
})
router.post('/bookedAction', async(req,res)=>{
  console.log(req.body);
    try {
          if(req.body.accept ==true){
              await rideModel.findByIdAndUpdate({_id:req.body.id},{$set :{status:"Approved"}})
              res.json({approved:true})
          }else{
            await rideModel.findByIdAndUpdate({_id:req.body.id},{$set :{status:"available"}})
            res.json({rejected:true})
          }
    } catch (error) {
        res.json({error:true})
    }
})
router.get('/deleteRide/:id', async(req,res)=>{
  let id = req.params.id;
  try {
      await rideModel.findByIdAndDelete({_id:id})
      res.json({success:true})
  } catch (error) {
      res.json({success:false})
  }
})
module.exports = router;
