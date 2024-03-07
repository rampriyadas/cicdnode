const mongoose = require('mongoose')

const portfolioSchema = mongoose.Schema(
    {
       portfolio_name:{
        type: String,
        required: true,
       }
    }
)
module.exports = mongoose.model("portfolio",portfolioSchema)