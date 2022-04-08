import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Delete, Done, Edit } from '../Redux/actions/actions';
import EditTodo from './EditTodo';

function Todo({todo}) {
  const dispatch=useDispatch();
  return (
    <div>
        <p style={{textDecoration:todo.done?"line-through":null}}>{todo.text}</p>
        <Button variant="success" onClick={()=>dispatch(Done(todo.id))}>Done</Button>
        <Button variant="danger" onClick={()=>dispatch(Delete(todo.id))}>Delete</Button>
        <EditTodo todo={todo}/>
    </div>
  )
}

export default Todo