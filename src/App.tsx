// import React from 'react';
import logo from './logo.svg';
import './App.css';
// Import dependencies
import * as React from 'react'
import { render } from 'react-dom'

// Import components
import TodoForm from './components/Form'
import TodoList from './components/List'

// Import interfaces
import { TodoInterface } from './typesriptcomponent/interfaces'

// Import styles
import './styles/styles.css'

function App() {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])

  // Creating new todo item
  function EventCreate(todo: TodoInterface) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Update new todos state
    newTodosState.push(todo)

    // Update todos state
    setTodos(newTodosState)
  }

  // Update existing todo item
  function EventUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Find correct todo item to update
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value

    // Update todos state
    setTodos(newTodosState)
  }

  // Remove existing todo item
  function EventRemove(id: string) {
    // Prepare new todos state
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

    // Update todos state
    setTodos(newTodosState)
  }

  // Check existing todo item as completed
  function EventComplete(id: string) {
    // Copy current todos state
    const newTodosState: TodoInterface[] = [...todos]

    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted

    // Update todos state
    setTodos(newTodosState)
  }


  return (
    <div >
      <h1>Todo List App</h1>
      <TodoForm
        todos={todos}
        EventCreate={EventCreate}
      />

      <TodoList
        todos={todos}
        EventUpdate={EventUpdate}
        EventRemove={EventRemove}
        EventComplete={EventComplete}
        // handleTodoBlur={handleTodoBlur}
      />
    </div>
  );
}

export default App;


