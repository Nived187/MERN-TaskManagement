

function main()
{
    tasks =''
    temp =  ''
    ul = document.getElementById('task-list')

    //

    getTasks()


}

const clrscr = ()=>{

    while(ul.hasChildNodes())
    {
        ul.removeChild(ul.firstChild)
    }

}

const getTasks = async()=>
            {
                try{
                    const result = await axios.get('http://localhost:3000/api/tasks')
                    tasks = result.data.task
                    
                    
                    for(var item=0;item<tasks.length;item++)
                    {
                        ul.innerHTML += "<li style='list-style:none;' }>"+
                        tasks[item].name+
                        `&nbsp &nbsp<button onclick=editTask('${tasks[item]._id}')>Edit</button>`+
                        `&nbsp &nbsp <button onclick=deleteTask('${tasks[item]._id}')>Delete</button>`+
                        "</li>"

                    }

                }
                catch(error)
                {
                    console.log(error)
                }
                            
            }

const editTask = async(id)=>{

    notify = document.getElementById('message')
    const res = await axios.get('http://localhost:3000/api/tasks/'+id)
    const task = res.data.msg

    notify.innerHTML = "id :"+task._id+"<br>"+
    `name : &nbsp <input type=text id=edit1 value=${task.name}>`+"<br>"+
    "completed :"+`<input type='checkbox' id ='edit2' ><br><br>
    <center><button onclick = update('${task._id}')>Update</button></center>`

    const cb1 = document.getElementById('edit2')
    if(task.completed)
        cb1.checked=true;
    else
        cb1.checked=false;
    

}
const update = async(id)=>{

    const cb1 = document.getElementById('edit2').checked
    const edit1 = document.getElementById('edit1').value
    temp = 'http://localhost:3000/api/tasks/'+id
    const res = await axios.patch(temp,{"name":edit1,"completed":cb1})
    if(res.request.status==200)
    {
        notify = document.getElementById('message')
        notify.innerHTML = "Updated"
    }
    
    clrscr()
    getTasks()

}

const createTask  = async()=>{

    let task = document.getElementById('input-box').value
    const response = await axios.post('http://localhost:3000/api/tasks',{"name":`${task}`,"completed":false})
    clrscr()
    getTasks()
    
}

const deleteTask  = async(id)=>{

    try{
        temp ='http://localhost:3000/api/tasks/'+id
        const response = await axios.delete(temp)
        
        if(response.request.status==200)
        {
            clrscr()
            getTasks()
        }
        else{
            console.log(response)
        }
    
    }catch(error)
    {
        console.log(" deleteTask error ln:55"+error)
    }

}
