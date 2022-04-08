import React from 'react'
import { ADD_TODO, DELETE_TODO, DONE, EDIT_TODO } from '../actions/types';

const initialState={
todos:[{
    id:1,
    text:"learn html",
    done:false    
},
{
    id:2,
    text:"learn css",
    done:false    
}
]
}

function todoReducer(state=initialState,action) {
 switch(action.type){
  case DONE:
    return { ...state, todos: state.todos.map(todo=>todo.id===action.payload?{...todo,done:!todo.done}:todo) };
  case ADD_TODO:
    return {
      ...state, todos:[...state.todos,{id:Math.random(),done:false,text:action.payload}]};
      case DELETE_TODO:
        return {
          ...state, todos:state.todos.filter(todo=>todo.id!==action.payload)};
          case EDIT_TODO:
            return {
              ...state, todos: state.todos.map(todo=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo)};

  default:
    return state;
 }
  
  

  return 
}

export default todoReducer;