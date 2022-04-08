import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

function ListTodos() {
    const todos=useSelector(state=>state.todoReducer.todos)
  return (
    <div>
     {
     todos.map(todo=>(<Todo key={todo.id} todo={todo}/>
     ))}
    </div>
  )
}

export default ListTodos