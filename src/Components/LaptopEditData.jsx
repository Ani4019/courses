import { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function LaptopEditData({ show, handleModalEditDataClose, dataEdit, laptopEdit  }) {
    const [formValue, setFormValue] = useState({ id: "", title: "", price: "", description:"", category:"", image:""});
  
 const lapTopEditData=()=>{
    handleModalEditDataClose()
    laptopEdit (formValue)
 }
    

      const handleChangeValue = (e) => {
        const {name, value} = e.target
       
        console.log({[name]: value})
        setFormValue((previousValue) => ({
            ...previousValue
            , [name]: value
        }))
    }

      useEffect(()=>{
        if(show && dataEdit){
            setFormValue({
                id: dataEdit.id || "",
                title: dataEdit.title || "",
                price: dataEdit.price || "",
                description: dataEdit.description || "",
                category: dataEdit.category || "",
                image: dataEdit.image || "",
            });
        }
    }, [show, dataEdit])


    return (
        <>
            <Modal show={show} onHide={handleModalEditDataClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Posts</Modal.Title>
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
                                value={formValue.price}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your description"
                                name="description"
                                value={formValue.description}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your category"
                                name="category"
                                value={formValue.category}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="add your image here"
                                name="image"
                                value={formValue.image}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleModalEditDataClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={lapTopEditData}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default LaptopEditData
