import "./App.css";
import Header from "./componentsOfWeb/topHeader";
import TodosList from "./componentsOfWeb/TodosList";
import Bottomfooter from "./componentsOfWeb/bottomFotter";
import AboutMyself from "./componentsOfWeb/AboutMyself";
import Addtodo from "./componentsOfWeb/Addtodo";

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
 
} from "react-router-dom";

 function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todoo) => {
    console.log("i am onDelete of todo", todoo);
    // deleting this way in react is not gonna work
    // let index = todos.indexOf(todoo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todoo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("im adding todo to list", title, ":-", desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
     <Router>
      <Header title="My Todos List" searchBar={false} />
      
      <Routes>
        <Route
          exact path="/"
          element={
            <>
              <Addtodo addTodo={addTodo} />
              <TodosList todos={todos} onDelete={onDelete} />
            </>
          }
        />
        
        <Route exact path="/about" element={<AboutMyself />} />
      </Routes>

      <Bottomfooter />
    </Router>
      </>
  );
}

export default App