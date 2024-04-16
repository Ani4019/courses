import { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';



function UserData({ handleModalClose, show }) {
    const [formValue, setFormValue] = useState({ userId: "", title: "", body: "" })

    const postUserData = async () => {
        try {

            const response  = await axios.post("https://jsonplaceholder.typicode.com/posts",formValue)
            handleModalClose()
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChangeValue = (e) => {
        const {name, value} = e.target
       
        console.log({[name]: value})
        setFormValue((previousValue) => ({
            ...previousValue
            , [name]: value
        }))
    }
    return (
        <>


            <Modal show={show} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Post</Modal.Title>
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
                <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={postUserData}>
                        Save Changes
                    </Button>
                </Modal.Footer>
                </Modal>
        </>

    )
}
export default UserData
                