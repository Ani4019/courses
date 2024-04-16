import { useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function MovieDeleteData ({ show, handleModalDeleteDataClose, dataDelete, movieDelete }) {

  const  movieDataDelete=()=>{
    movieDelete(dataDelete)
    handleModalDeleteDataClose()

  }

      
    return (
        <>


            <Modal show={show} onHide={handleModalDeleteDataClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this post?
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleModalDeleteDataClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={movieDataDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
                </Modal>
        </>

    )
}
 

export default MovieDeleteData

