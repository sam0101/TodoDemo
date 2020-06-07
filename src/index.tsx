import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoListApp from './components/todo';
import * as serviceWorker from './serviceWorker';

let todos = localStorage.getItem('todos');
if(!todos){
  localStorage.setItem('todos','')
 // let todoList = JSON.parse(todos);
 // console.log(todoList);  
}

ReactDOM.render(
  <React.StrictMode>
    <TodoListApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
