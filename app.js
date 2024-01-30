const express =  require('express')

const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200)
    res.json({"message":"Okay running"})
})
app.listen(8000,console.log(`listening to port : 8000`))