var express = require('express');
var router = express.Router();
var userModel = require('../Models/userModel')
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
      console.log(user,"logged in")
      res.json(user)
      
  } catch (error) {
      console.log(error)
  }
})

module.exports = router;
