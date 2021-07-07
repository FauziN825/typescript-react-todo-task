// Import dependencies
import * as React from 'react'

// Import interfaces
import { InterfaceItem } from '../typesriptcomponent/interfaces'

// TodoItem component
const TodoItem = (props: InterfaceItem) => {
  return (

    
    <div className='todo-item'>
      <div onClick={() => props.EventComplete(props.todo.id)}>
        {props.todo.isCompleted ? (
          <span className="">✔</span>
        ) : (
          <span className="" />
        )}
      </div>

      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.text}

          onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.EventUpdate(event, props.todo.id)}
        />
      </div>

      <div className="" >
        <button onClick={() => props.EventRemove(props.todo.id)} >X</button>
      </div>
    </div>
  )
}

export default TodoItem