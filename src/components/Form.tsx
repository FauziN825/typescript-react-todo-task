// Import dependencies
// import * as React from 'react'
import shortid from 'shortid'
import React from 'react'

// Import interfaces
import {TodoInterface, InterfaceForm} from '../typesriptcomponent/interfaces'

// Todo form component
const TodoForm = (props: InterfaceForm) => {

  // Create ref for form input
  const inputRef = React.useRef<HTMLInputElement>(null)
  // Create form state
  const [text, setText] = React.useState('')

  // Handle todo input change
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Update form state with the text from input
    setText(event.target.value)
  }

  return (
    <div className="todo-form">
      <form>
      <input
        ref={inputRef}
        type="text"
        placeholder='Enter To do List'
        onChange={event => handleInputChange(event)}
        // onKeyPress={event => handleInputEnter(event)}
      />
      
      <button   
      onClick={e => {
          e.preventDefault();
          const newTodo: TodoInterface = {
            id: shortid.generate(),
            text: text,
            isCompleted: false
          }
          // setText('')
          props.EventCreate(newTodo)
          if (inputRef && inputRef.current) {
            inputRef.current.value = ''
            setText('')
          }
        }}> Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm