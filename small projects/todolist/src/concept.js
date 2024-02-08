function TodoItem({ todo, onDelete }) {
    return (
      <div className="todo-item">
        <span>{todo}</span>
        <button onClick={() => onDelete(todo)}>Delete</button>
      </div>
    );
  }

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      console.log();
      setNewTodo('');
    }
  };

  const deleteTodo = (todo) => {
    const updatedTodos = todos.filter((t) => t !== todo);
    setTodos(updatedTodos);
  };

//   <div className="App">
//   <h1>Todo List</h1>
//   <div>
//     <input
//       type="text"
//       value={newTodo}
//       onChange={(e) => setNewTodo(e.target.value)}
//     />
//     <button onClick={addTodo}>Add</button>
//   </div>
//   <div>
//     {todos.map((todo, index) => (
//       <TodoItem key={index} todo={todo} />
//     ))}
//   </div>
// </div>
  