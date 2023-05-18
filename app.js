
require('dotenv').config()
const dbconnect = require('./connect')
const express = require('express')
const tasks = require('./routes')
const app = express()
const PORT = 3000

// middlewares

app.use(express.static('./public'))
app.use(express.json())

//



const start = async()=>{
try{
    await dbconnect(process.env.conn_uri)
    app.listen(PORT,console.log(`Server Running on ${PORT}`))
}catch (error){
    console.log(error)
}

}

start()

app.use('/api/tasks',tasks)
app.get('/',(req,res)=>{
    res.sendFile('./public/home.html')
})

// */