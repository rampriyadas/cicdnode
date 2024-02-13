const mongoose = require('mongoose')

const khasraSchema = mongoose.Schema(
    {
       khasra:{
        type: String,
       },
       coords:{
        type: [[Number]],
       },
       village:{
        type: String,
       },
       tehsil:{
        type: String,
       }
     
    }
)


module.exports = mongoose.model("khasra",khasraSchema)