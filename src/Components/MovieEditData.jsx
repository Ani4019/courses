import { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function MovieEditData({show, handleModalEditDataClose, dataEdit}) {
    const [loading, setloading] = useState({ id: "", movie: "", rating: "", image:"", imdb_url:""})
 

    const patchUserData = useCallback(async () => {
        try {
            
            const response  = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${dataEdit.id}`,loading)
            handleModalEditDataClose()
            console.log(response)
        } catch (error) {
            console.error(error)
        
        }
      })

      const handleChangeValue = (e) => {
        const {name, value} = e.target
       
        console.log({[name]: value})
        setloading((previousValue) => ({
            ...previousValue
            , [name]: value
        }))
    }

      useEffect(()=>{
        if(show && dataEdit){
            setloading({
                id: dataEdit.id || "",
                movie: dataEdit.movie || "",
                rating: dataEdit.rating || "",
                image: dataEdit.image || "",
                imdb_url: dataEdit.imdb_url || "",

            },[show, dataEdit])
        }
      })

    return (
        <>
            <Modal show={show} onHide={handleModalEditDataClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter your id"
                                name="id"
                                onChange={(e) => handleChangeValue(e)}
                                autoFocus
                                value={loading.id}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter movie name"
                                name="movie"
                                value={loading.movie}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter your rating"
                                name="rating"
                                value={loading.rating}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="add your image here"
                                name="image"
                                value={loading.image}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Movie URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter your image URL"
                                name="imageURL"
                                value={loading.imdb_url}
                                onChange={(e) => handleChangeValue(e)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleModalEditDataClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={patchUserData}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default MovieEditData
