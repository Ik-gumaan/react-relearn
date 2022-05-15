import React from 'react'

export default function ToDoItem(props) {

var todoItemStyle={
marginTop:"25px",
padding:"5px"
}


    console.log(props);
    return (
        <div className="container" style={todoItemStyle}>
            <h5>{props.todo.title}</h5>
            <p>{props.todo.time}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>delete</button>
        </div>

    )
}
