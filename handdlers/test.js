const khasra = require('../schema/khasra')
const axios = require("axios")

const getX = async (req,res)=>{
 if(req.body.khasra!=''){
    let details = await khasra.find();
    console.log(details)
        // try{
        //  let details = await khasra.find({"khasra":req.body.khasra,"village":req.body.village});
        //  res.status(200).json(details)
        // }
        // catch(e){
        //  res.status(404).json({"message":"no data found"})
        // }
    }
}

module.exports = {getX}