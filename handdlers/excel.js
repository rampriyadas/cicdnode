const getX = async (req,res)=>{
    const file = `./sample.xlsx`;
    res.download(file);
 
 }   

 module.exports = {getX}