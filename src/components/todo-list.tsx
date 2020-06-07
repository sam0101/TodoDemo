import React from "react";
import  {TodoListInterface} from  '../interfaces'
import Todoitem from './todo-item'
  const TodoListComponent=(props:TodoListInterface) => {
  
    return (
      <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <Todoitem
              todo={todo}             
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}          
            />
          </li>
        ))}
      </ul>
    </div>
    );
  }
  export default TodoListComponent