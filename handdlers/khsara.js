const khasra = require('../schema/khasra')
const axios = require("axios")
const qs = require("qs")

const getData = async (req,res)=>{
    // if(req.body.khasra!=''){
    //     try{
    //      let details = await khasra.find({"khasra":req.body.khasra,"village":req.body.village});
    //      res.status(200).json(details)
    //     }
    //     catch(e){
    //      res.status(404).json({"message":"no data found"})
    //     }
    // }
    

}

module.exports = {getData}