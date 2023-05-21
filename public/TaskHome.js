
let tasks =''
let latest_fetch =0
let temp =  ''


const getTasks = async()=>
            {
                try{
                    const result = await axios.get('http://localhost:3000/api/tasks')
                    //console.log(result)
                    tasks = result.data.task
                    const ul = document.getElementById('box')
                    
                    for(var item=latest_fetch;item<tasks.length;item++)
                    {
                        ul.innerHTML += "<li style='list-style:none;' }>"+
                        tasks[item].name+
                        `<button onclick=deleteTask('${tasks[item]._id}',${item})>Delete</button>`+
                        "</li>"
                        

                    }
                    latest_fetch=tasks.length

                }
                catch(error)
                {
                    console.log(error)
                }
                            
            }

const createTask  = async()=>{

    let task = document.getElementById('input-box').value
    console.log(task)
    const response = await axios.post('http://localhost:3000/api/tasks',{"name":`${task}`,"completed":false})
    getTasks()
    console.log(response)
}

const deleteTask  = async(id,itemno)=>{

    try{
        temp ='http://localhost:3000/api/tasks/'+id
        const response = await axios.delete(temp)
        latest_fetch--
        itemno=itemno+1
        
        if(response.request.status==200)
        {
            const e = document.getElementById('box')
            e.removeChild(e.children[itemno])
        }
        else{
            console.log(response)
        }
    
    }catch(error)
    {
        console.log(" deleteTask error ln:55"+error)
    }
    


}