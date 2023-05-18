
const express = require('express')
const path = require('path')
const router = express.Router()
const baseurl = path.resolve(__dirname+"/public")




router.get('/',(req,res)=>{
    res.sendFile(path.join(baseurl,"/TaskHome.html"))
})

module.exports = router