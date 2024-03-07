const express = require('express');
const paths = require('./endpoints/paths');
require('dotenv').config();
const connectdb = require('./config/db');
connectdb()
const app = express();
app.use(express.json())
app.use(express.static('./static'))

app.use('/api',paths)

app.get('/',(req,res)=>{
    res.status(200).json({"message":"working fine"});
})
app.all('*',(req,res)=>{
    res.destroy(null);
})
app.listen(process.env.PORT, ()=>{
    console.log('listening to port ',process.env.PORT);
})