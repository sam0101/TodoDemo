import * as  React from "react";
import {TodoItemInterface} from '../interfaces'
const TodoItem=(props:TodoItemInterface)=>{
    return (
      <div className='todo-item'>
      <div onClick={() => props.handleTodoComplete(props.todo.id)}>
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">✔</span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </div>
      <div className="todo-item-input-wrapper">
        <div className="todo-text-div"
        >{props.todo.text}</div>
      </div>
      <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
        ⨯
      </div>
    </div>
)

}
export default TodoItem;