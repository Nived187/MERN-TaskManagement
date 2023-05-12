
const mongoose = require('mongoose')

//const TaskSchema = mongoose.Schema({name:String,
//                                    completed:Boolean
//                               })

const TaskSchema = mongoose.Schema({name:{
    type:String,
    trim:true,
    required:[true,'no empty allowed'],
    minlength:[3,'cant be less than 3']
},
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model('Task',TaskSchema)                            