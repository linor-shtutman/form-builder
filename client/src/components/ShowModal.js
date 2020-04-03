import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ShowModal = ({ closeModal }) => {
    return (
        <Modal show onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Opss, something went wrong</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Please try again later</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ShowModal
