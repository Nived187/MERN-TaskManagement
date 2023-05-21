
require('dotenv').config()
const dbconnect = require('./connect')
const express = require('express')
const tasks = require('./routes')
const webapp = require('./webapp')
const app = express()
const PORT = 3000

// middlewares

app.use(express.static('./public'))
app.use(express.json())

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

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
app.use('/home',webapp)


// */