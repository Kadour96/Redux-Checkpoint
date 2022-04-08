import { ADD_TODO, DELETE_TODO, DONE, EDIT_TODO } from "./types";

export const Done = (id)=> {
    return {
      type: DONE,
      payload: id,
    };
  };
  export const Add = (text)=> {
    return {
      type: ADD_TODO,
      payload: text,
    };
  };
  export const Delete = (id)=> {
    return {
      type: DELETE_TODO,
      payload: id,
    };
  };
  export const Edit = (id,newText)=> {
    return {
      type: EDIT_TODO,
      payload: {id,text:newText},
    };
  };