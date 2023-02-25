const mongoose = require("mongoose");
const bookRideModel = new mongoose.Schema({
    RideID:{
        type:String,
        requried:true
    },
    userID:{
        type:String,
        requried:true
    }
})
module.exports = mongoose.model("bookRide",bookRideModel)