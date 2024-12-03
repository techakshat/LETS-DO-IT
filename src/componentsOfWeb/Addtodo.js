import { useState } from "react";

const Addtodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title|| !desc){
            alert("Title or Description cannot be blank!  ")
        }
        else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
    }}
  return (
    <div className=" container my-3">
      <h3 className="text-center">Add a Task to do</h3>
      <form onSubmit={submit}>
          <legend>Disabled fieldset example</legend>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              id="title"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" className="form-control"></input>
          </div>
          <button type="submit" className="btn btn-sm btn-success">
            Add Todo
          </button>
      </form>
    </div>
  );
};

export default Addtodo;
