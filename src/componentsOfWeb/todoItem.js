import React from 'react'
export default function todoItem({todoo, onDelete}) {
  return (
    <>
    <div>
 <h4>{todoo.title}</h4>
      <p>{todoo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todoo)}}
          >Delete</button>
    </div>
    <hr/>
    </>
  )
}