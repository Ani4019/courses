import { useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function PracticeDelete ({ show, handleDeleteModalClose, data, UserDelete }) {

  const  userDataDelete=()=>{
    UserDelete(data)
    handleDeleteModalClose()

  }

      
    return (
        <>


            <Modal show={show} onHide={handleDeleteModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this post?
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleDeleteModalClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={userDataDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
                </Modal>
        </>

    )
}
 

export default PracticeDelete

