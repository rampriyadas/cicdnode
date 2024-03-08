const portfolio = require('../schema/portfolio')
const policy = require('../schema/policy')

const getPortfolio = async(req,res)=>{
    try{
        let details = await portfolio.find().select({ portfolio_name: 1, _id: 1 });
        res.status(200).json(details)
        }
    catch(e){
        res.status(404).json({"message":"something went worng!"})
        }
}

const getPolicy = async(req,res)=>{
    try{
        let details = await policy.find({"portfolio":req.body.portfolio});
        res.status(200).json(details)
        }
    catch(e){
        res.status(404).json({"message":"something went worng!"})
        }
}

module.exports = {getPortfolio,getPolicy}
