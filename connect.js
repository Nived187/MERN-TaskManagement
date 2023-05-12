
const mongoose = require('mongoose')

const dbconnect=(uri)=>{

    msg = mongoose.connect(uri)
    return msg 
}

module.exports = dbconnect
