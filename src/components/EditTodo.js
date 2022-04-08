import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Edit } from "../Redux/actions/actions";

function EditTodo({todo}) {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [text,setText]=useState(todo.text);
    const dispatch=useDispatch();
    return (
      <>
        <Button variant="info" onClick={handleShow}>
         Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Text</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Edit Input"
                  autoFocus
                  value={text}
                  onChange={e=>setText(e.target.value)}
                />
              </Form.Group>
            
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{
                dispatch(Edit(todo.id,text));handleClose()
            }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default EditTodo ;