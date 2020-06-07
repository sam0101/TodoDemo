import React from 'react';
import { render } from '@testing-library/react';
import TodoListApp from './components/todo';

test('TodoList renders correctly', ()=>{
    const component =<TodoListApp/>
    const tree = component;
    expect(tree).toMatchSnapshot()
})
