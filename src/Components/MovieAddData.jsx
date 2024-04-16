import { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MovieAddData({ show, handleModalDataClose, addPost }) {
    const [loading, setloading] = useState({ id: "", movie: "", rating: "", image:"", imageURL:""})
 

    const addFilmData=()=>{
        addPost(loading)
        handleModalDataClose()

    }
    const handleChangeValue = (e) => {
        const { name, value} = e.target
            console.log({ [name]: value })
        setloading((previousValue) => ({
            ...previousValue, [name]: value
        }))
    }

    return (
        <>
            <Modal show={show} onHide={handleModalDataClose}>
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
                            <Form.Label>Movie-URL</Form.Label>
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

                    <Button variant="secondary" onClick={handleModalDataClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addFilmData}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MovieAddData;