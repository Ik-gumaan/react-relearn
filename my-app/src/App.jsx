import logo from './logo.svg';
import './App.css';
import Header from './my components/Header';
import ToDos from './my components/ToDos';
import Footer from './my components/Footer';
import React, { useEffect, useState } from 'react';
import AddToDo from './my components/AddToDo';
import About from './my components/About';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

  // import Switch from "react-router";

function App() {


  var initTodo;


  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))

  }


  const [todos, setTodos] = useState(initTodo);

  // locally save
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
    , [todos]
  );



  const onDelete = (item) => {
    console.log("DELETE", item);

    setTodos(
      todos.filter((e) => {
        return e !== item;
      })
    );


  }

  const addToDo = (i, t) => {
    console.log("ADD", i);
    var no;
    if (todos.length === 0) {
      no = 1;
    }
    else {
      no = todos[todos.length - 1].no + 1;
    }
    const obj = {
      title: i,
      time: t,
      no: no
    };
    setTodos(
      [...todos, obj] ,
    );

    console.log(obj);

  }



  return (
//     <Router>
//       <Header title="TODOS LIST" />
//       {/* <Switch> */}
// <Routes>
//       <Route exact path="/" render={()=>{
//         return (
//           <>
//           <AddToDo addToDo={addToDo} />
//           <ToDos todos={todos} onDelete={onDelete} />    
//         </>
//         )
//       }}>
//           </Route>
         
//           <Route path="/about">
//             <About />
//           </Route>
//       {/* </Switch> */}
//       </Routes>
//       <Footer todos={todos} />
//     </Router>

<div>
<Header title="TODOS LIST" />

<AddToDo addToDo={addToDo} />
<ToDos todos={todos} onDelete={onDelete} />    
      <Footer todos={todos} />
</div>
  );
}

export default App;
