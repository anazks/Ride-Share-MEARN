const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    rideMode: {
        type: String,
        required: true
    },
    startingTime: {
        type: String,
        required: true
    },
    endingTime: {
        type: String,
        required: true,
        unique: true
    },
    riderID: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "available"
    },
    bookedUser: {
        type: String,
        default: "no"
    },
    payments: {
        type: String,
        required: true
    },
    passengers: {
        type: Number,
        required: true
    },
    startingPlace: {
        type: String,
        required: true
    },
    endingPlace: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("Rides", UserSchema);