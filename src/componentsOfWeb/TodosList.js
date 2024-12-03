import React from "react";
import TodoItem from "./todoItem";
export const TodosList = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length===0? "All tasks are Done" : 
      props.todos.map((todo) => {
        return (<TodoItem todoo={todo} key={todo.sno} onDelete={props.onDelete}/>
      )
      })
      }
    </div>
  )
}
export default TodosList;