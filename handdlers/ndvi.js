const khasra = require('../schema/khasra')
const axios = require("axios")
const gettoken = require('./config/gettoken')

const getX = async (req,res)=>{
 if(req.body.khasra!=''){
    let details = await khasra.findOne({"khasra":req.body.khasra,"village":req.body.village}).select({ goemetry: 1, _id: 0 });
    // console.log(details.toObject().goemetry)
    let year = new Date().getFullYear()
    let month = new Date().getMonth()
    const months = ["01","02","03","04","05","06","07","08","09","10","11","12"];

    // console.log(year+1)
    const instance2 = axios.create({
        baseURL: "https://services.sentinel-hub.com"
        })
    const config = {
        headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' :  `Bearer ${process.env.SENTINEL_TOKEN}`,
        }
        }
    const body = 
       {
        "input": {
         "bounds": {
            "geometry": {
                "type": "Polygon",
                "coordinates": [details.toObject().goemetry]
              },
          "properties": {
              "crs": "http://www.opengis.net/def/crs/EPSG/0/32633"
              }
          },
          "data": [
            {
              "type": "sentinel-2-l2a",
              "dataFilter": {
                  "mosaickingOrder": "leastCC"
              }
            }
          ]
        },
        "aggregation": {
          "timeRange": {
                  "from": `${year-1}-${months[month]}-01T00:00:00Z`,
                  "to": `${year}-${months[month]}-01T00:00:00Z`
            },
          "aggregationInterval": {
              "of": "P5D"
          },
          
          "evalscript": evalscript,
          "resx": 10,
          "resy": 10
        }
      }
    await instance2.post("/api/v1/statistics", body, config).then(resp => {
        res.status(200).json({"message":"okay","data":resp.data.data})
    }).catch( async()=>{
      await gettoken();
      res.status(200).json({"message":"please try again"})
    })    
    }
 else{
    res.status(400).json({"message":"bad request"})
 }
}

module.exports = {getX}