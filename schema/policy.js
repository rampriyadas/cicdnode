const mongoose = require('mongoose')
const { Schema } = mongoose;

const policySchema = mongoose.Schema(
    {
       policy_number:{
        type: String,
       },
       khasra:{
        type: String,
       },
       portfolio:{
        type: Schema.Types.ObjectId, ref: 'porfolio',
        required: true,
       },
       village:{
        type: String,
       },
       tehsil:{
        type: String,
       },
       district:{
        type: String,
       },
       state:{
        type: String,
       },
       appicant:{
        type: String,
       }     
    }
)


module.exports = mongoose.model("policy",policySchema)