
const getTasks = async()=>
            {
                try{
                    const result = await axios.get('http://localhost:3000/api/tasks')
                    tasks = result.data.task
                    console.log(tasks.length)
                    const ul = document.getElementById('box')
                    
                    for(var item=0;item<tasks.length;item++)
                    {
                        ul.innerHTML += "<li>"+tasks[item].name+"</li><br>"

                    }

                }
                catch(error)
                {
                    console.log(error)
                }
                            
            }

const createTask  = async()=>{

    const response = await axios.post('http://localhost:3000/api/tasks',{"name":"trial","completed":true})
    console.log(response)
}