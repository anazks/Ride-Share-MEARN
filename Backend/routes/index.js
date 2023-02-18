var express = require('express');
var router = express.Router();
var userModel = require('../Models/userModel')
var rideModel =require('../Models/ridesModel')
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
module.exports = router;
