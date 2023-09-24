const mongoose = require("mongoose")
const mongoDbUrl='mongodb+srv://HRM_CRM:fjdFJts3QrMn9Em2@cluster0.avd4630.mongodb.net/life'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}