const express = require('express');
const cors = require("cors");
const paths = require('./endpoints/paths');
require('dotenv').config();
const connectdb = require('./config/db');
const gettoken = require('./config/gettoken')
connectdb()
gettoken()


const app = express();
app.use(express.json())
app.use(express.static('./static'))
const whitelist = ["http://127.0.0.1:3000","localhost:3000","127.0.0.1:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.use('/api',paths)

app.get('/',(req,res)=>{
    res.status(200).json({"message":"working fine after git"});
})
app.all('*',(req,res)=>{
    res.destroy(null);
})
app.listen(process.env.PORT, ()=>{
    console.log('listening to port ',process.env.PORT);
})