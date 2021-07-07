// Import dependencies
import * as React from 'react'

// Import TodoItem
import TodoItem from './Item'

// Import interfaces
import { InterfaceList } from '../typesriptcomponent/interfaces'

// TodoList component
const TodoList = (props: InterfaceList) => {
  return (
    <div className="list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              EventUpdate={props.EventUpdate}
              EventRemove={props.EventRemove}
              EventComplete={props.EventComplete}

            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList