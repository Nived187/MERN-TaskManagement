
const Task = require('./schema')


const getAllTasks = async (req,res)=>{

    try {

        const task = await Task.find({})
        res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error})
        
    } 
}

const createTask= async (req,res)=>{

    try{
    
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(error)
    {
        res.status(500).json({msg:error})
    }

    
}

const getTask= async (req,res)=>{

        const taskId = req.params.id

        try {

        const task = await Task.findOne({_id:taskId})
        
        if(!task)
        {
            return res.status(404).json({msg:"task with id not found"})
        }
        
        res.status(200).json({msg:task})
            
        } catch (error) {
            res.status(500).json({msg:error})
            
        }

        
}

const updateTask= async(req,res)=>{

    try {

        const taskID = req.params.id
        const task = await Task.findOneAndUpdate({_id:taskID},
            req.body,
            {new:true,
            runValidators:true
        })

        if(!task){
            return res.status(404).json({msg:"no task with id"})
        }
        
        res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

const deleteTask= async(req,res)=>{

    const taskId = req.params.id

        try {

        const task = await Task.findOneAndDelete({_id:taskId})
        
        if(!task)
        {
            return res.status(404).json({msg:"task with id not found"})
        }
        
        res.status(200).json({msg:task})
            
        } catch (error) {
            res.status(500).json({msg:error})
            
        }
}

module.exports = {
    getAllTasks,
    updateTask,
    getTask,
    deleteTask,
    createTask,
}