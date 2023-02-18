const mongoose = require("mongoose");


const  connect = () =>{
    return  mongoose.connect("mongodb+srv://anazks:123@cluster0.jxpil.mongodb.net/RideShare?retryWrites=true&w=majority")
}
module.exports = connect;