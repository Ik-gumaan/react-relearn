import React from 'react'
import ToDoItem from "./ToDoItem";

const ToDos = (props) => {

  var toDoListHead = {
    width: "30%",
    padding: "10px",
    marginTop: "30px",
    borderRadius: "10px",
    color: "white"
  }

  var mainDivStyle = {
    minHeight: "70vh",
  }


  return (
    <div className="container" style={mainDivStyle}>
      <center>
        <h4 className="bg-dark" style={toDoListHead}>TODOS LIST</h4>

        {props.todos.length === 0
          ?
          "TO DO LIST IS EMPTY"
          :
          props.todos.map((todo) => {
            return (
            <ToDoItem todo={todo} key={todo.no} onDelete={props.onDelete} />
            )
          })
        }
      </center>

    </div>
  )
}

export default ToDos
