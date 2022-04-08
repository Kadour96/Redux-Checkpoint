import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Add } from '../Redux/actions/actions';

function AddTodos() {
const [text,setText]=useState('')
const dispatch=useDispatch();
const handleSubmit=(e)=>{
    e.preventDefault()
    if(text){
 dispatch(Add(text))
 setText("");
    }
   
}
  return (
    <Form onSubmit={handleSubmit}>
        <FormControl type='text' onChange={e=>setText(e.target.value)} value={text}/>
        <Button type='submit' variant='secondary'>
            Add
        </Button>
    </Form>
  )
}

export default AddTodos