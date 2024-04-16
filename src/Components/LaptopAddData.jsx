import { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function LaptopAddData({ show, handleModalDataClose, addPost }) {
    const [formValue, setFormValue] = useState({ id: "", title: "", price: "", description:"", category:"", image:""})
 

    const addLaptopData=()=>{
        addPost(formValue)
        handleModalDataClose()

    }
    const handleChangeValue = (e) => {
        const { name, value} = e.target
            console.log({ [name]: value })
        setFormValue((previousValue) => ({
            ...previousValue, [name]: value
        }))
    }

    return (
        <>
            <Modal show={show} onHide={handleModalDataClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Posts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your id"
                                name="id"
                                onChange={(e) => handleChangeValue(e)}
                                autoFocus
                                value={formValue.id}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your title"
                                name="title"
                                value={formValue.title}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your price"
                                name="price"
                                value={setFormValue.price}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your description"
                                name="description"
                                value={setFormValue.description}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your category"
                                name="category"
                                value={setFormValue.category}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="add your image here"
                                name="image"
                                value={setFormValue.image}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleModalDataClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addLaptopData}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LaptopAddData;