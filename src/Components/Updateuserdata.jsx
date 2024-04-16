import { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Updateuserdata ({ show, handleUpdateModal, data }) {
    const [formValue, setFormValue] = useState({ userId: "", title: "", body: "" })

    const patchUserData = useCallback(async () => {
        try {
            
            const response  = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${data.id}`,formValue)
            handleUpdateModal()
            console.log(response)
        } catch (error) {
            console.error(error)
        

        }
            
            
            
            // await fetch("https://jsonplaceholder.typicode.com/posts",formValue)
      })

    const handleChangeValue = (e) => {
        const {name, value} = e.target
       
        console.log({[name]: value})
        setFormValue((previousValue) => ({
            ...previousValue
            , [name]: value
        }))
    }

    useEffect(() => {
        if (show && data) {
          setFormValue({
            userId: data.userId || "",
            title: data.title || "",
            body: data.body || "",
          });
        }
      }, [show, data]);
      
    return (
        <>


            <Modal show={show} onHide={handleUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>UserId</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter user id"
                                name="userId"
                                onChange={(e)=>handleChangeValue(e)}
                                autoFocus
                                value={formValue.userId}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter title"
                                name="title"
                                value={formValue.title}
                                onChange={(e)=>handleChangeValue(e)}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3}
                            value={formValue.body}
                                placeholder="enter description"
                                name="body"
                                onChange={(e)=>handleChangeValue(e)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleUpdateModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={patchUserData}>
                        Update Changes
                    </Button>
                </Modal.Footer>
                </Modal>
        </>

    )
}
 

export default Updateuserdata
