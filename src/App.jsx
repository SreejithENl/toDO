import { useState } from 'react'
import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const createTodo = (e) => {
    setTodo(e.target.value);
  }

  const addToDo = () => {
    if(todo !=""){
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  const deleteTodo = (todoItem) => {
    console.log(todoItem);
    const updatedTodos = todos.filter((todo) => {
      return todo != todoItem;
    });
    setTodos(updatedTodos)
  }

  return (
    <>
      <div className="App">
        <h1>Test Todo App</h1>
        <TodoInput todo={todo} createTodo={createTodo} addToDo={addToDo} />
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
      </div>
    </>
  )
}

export default App
