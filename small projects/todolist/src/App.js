import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function TodoItem({todo,index}){
  return(
    <div className='todo-item'>
      <span>{todo}</span>
      <button onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  );
}


function App() {
   const [todos, setToDos] = useState([]);
   const [newToDo, setnewToDo] = useState('');

   const addTodo = () =>{
    if(newToDo.trim() !== ''){
      setToDos([...todos,newToDo]);
    }
    console.log(newToDo);
    console.log(todos);
  }

  const deleteToDo = () =>{
    const updatedTodos = todos.filter((t) => t !== todo);
    setTodos(updatedTodos);
  }
     
  return (
   <div className='App'>
    <h1>Todo List</h1>
    <input type='text' value={newToDo} onChange={(e) => setnewToDo(e.target.value)} />
    <button onClick={addTodo}>Add</button>
    <div>
      {
        todos.map((todo,index)=>(
        <TodoItem key={index} todo={todo} onDelete={deleteToDo}></TodoItem>
        ))
      }
    </div>
   </div>
  );
}

export default App;
