const mongoose = require('mongoose')

const connectdb = async()=>{
    try{
        const connection = await mongoose.connect(process.env.DB_CONNECTION)
        console.log("connected to "+connection.connection.host)
    }
    catch(err){
        console.log(err)
    }
}


module.exports = connectdb