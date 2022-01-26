import React from "react";


function Todos(props){

    const [click,setClick] = React.useState(false)

    function handleClick(event){
        setClick(prevValue=>{
            return !prevValue;
        })
    }
    
    
    return(
        <div className="Note">
            <div className="left-end">
            <input onClick={handleClick} value={props.obj.status}  type="checkbox" />
            <h2 style={{textDecoration : click ? "line-through" : "none"}}>{props.item}</h2>
            </div>
            <i onClick={()=>{props.onClose(props.id)}} value={props.id} class="close-btn fas fa-trash-alt"></i>
        </div>
    );
    }
export default Todos;