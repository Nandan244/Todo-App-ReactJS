import React from "react";
import Todos from "./Todos"

function List(){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const Day = new Date().toLocaleDateString(undefined,options)
    const time = new Date().toLocaleTimeString()

    const [todos,setTodos] = React.useState([])
    const [todo,setTodo] = React.useState("")

    function getTodo(event){
        setTodo(event.target.value)
    }
    function getTodos(){
        setTodos([...todos,{id: time,text : todo,status : false}])
        setTodo("")
    }
    function tdelete(id){
         setTodos(prevItems=>{
             return prevItems.filter((item,index)=>{
                 return index!==id;
             })
         })
    }
    
    
    return(
        <div className="List-sect">
            <section className="List">
           <ul>
               <li> <h2  className="Title">{Day}</h2></li>            
               <li><input onChange={getTodo} value={todo} className="Textbox" type="text" placeholder="🖊️ Enter the work here.."/><button onClick={getTodos} className="Addbtn"><h1>Add</h1></button></li>
           </ul>
        </section>
        <section className="todo-section">
                {todos.map((item,index)=>{
                    return <Todos onClose={tdelete} key={index} id={index} obj={item} item={item.text} />
                })}
        </section> 
        </div>
    )
}

export default List;