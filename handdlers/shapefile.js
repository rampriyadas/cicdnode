const khasra = require('../schema/khasra')
const shapefile = require("shapefile");

const postData = async (req,res)=>{
 shapefile.open("shapefiles\\Balesar_Merge Vector\\Balesar_Merge Vector.shp")
  .then(source => source.read()
    .then(async function log(result) {
      if (result.done) return;
      // console.log(result.value['properties']['khasra_no']);
      const data = await khasra.create({
        khasra : result.value['properties']['khasra_no'],
        coords : result.value['geometry']['coordinates'][0],
        village : result.value['properties']['Village'],
        tehsil : result.value['properties']['Tehsil']
        });
      return source.read().then(log);
    }))
  .catch(error => console.error(error.stack));
   
}

module.exports = {postData}