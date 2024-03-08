const khasra = require('../schema/khasra')
const axios = require("axios")
const turf = require("@turf/turf")


const getData = async (req,res)=>{
    if(req.body.khasra!=''){
        // try{
         let details = await khasra.findOne({"khasra":req.body.khasra,"village":req.body.village}).select({ goemetry: 1, _id: 0 });
         let center = turf.center(turf.points(details.toObject().goemetry));
         axios({
            method: 'get',
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${center.geometry.coordinates[0]}&lon=${center.geometry.coordinates[1]}&appid=${process.env.WEATHER_TOKEN}&units=metric`,
            
          })
            .then(function (response) {
              res.status(200).json(response.data)
            }).catch( ()=>{res.status(200).json({"message":"something went wrong !"})});
        
        // }
        // catch(e){
        //  res.status(404).json({"message":"no data found"})
        // }
    }
    

}





module.exports = {getData}