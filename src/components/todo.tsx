import  React,{useEffect} from 'react'
import TodoForm from './todo-form'
import TodoList from './todo-list'
import { TodoInterface } from '../interfaces'
import './assets/style.css'
let remainingTodos=[];
const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    setTodos(newTodosState)
   
    localStorage.setItem('todos',JSON.stringify(newTodosState));
  }
  useEffect(() => {
    let todo = localStorage.getItem('todos');
    if(todo){
    let todoList = JSON.parse(todo);
    
    if(JSON.stringify(todos)!==todo){     
      setTodos(todoList)
 
    }
}
  });
 
  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
    setTodos(newTodosState)
    localStorage.setItem('todos',JSON.stringify(newTodosState));
  }
  function handleTodoComplete(id: string) {     
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
    setTodos(newTodosState);
    
    
  //  todo.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
     remainingTodos =  todos.filter(function(item) {
        return item.isCompleted === true
    });
    localStorage.setItem('todos',JSON.stringify(newTodosState));
  }
  //
 
  return (
    <div className="todo-list-app">
         <h2>{`Total Todos Remaining : ${todos.length-remainingTodos.length} out of ${todos.length}`}</h2>
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />
      <TodoList
        todos={todos}     
         handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
    
      />
    </div>
  )
}
export default TodoListApp;