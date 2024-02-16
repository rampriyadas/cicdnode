const getData = async (req,res)=>{
 
   res.status(200).json({"message":"You have tried for get  request !"})

}
const postData = async (req,res)=>{
   
  if(req.body.name){
    res.status(200).json({"message":`Hey, how are you ${req.body.name} :)`})
  }
  else{
    res.status(400).json({"message":`Expected a name in request body :( `})
  }

}
  
 
module.exports = {getData,postData}