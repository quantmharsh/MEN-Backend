

const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send("Hello World 123!")
})
app.get('/twitter' ,(req , res)=>{
   res.send("Hello welcome to twitter route"); 
})
app.get('/Quantam' ,(req , res)=>{
    res.send("Hello welcome to <h1>Quantam</h1> route"); 
 })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})