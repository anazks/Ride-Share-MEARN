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
        default: "default"
    },
    payments: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("user", UserSchema);