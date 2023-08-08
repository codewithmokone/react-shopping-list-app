import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateFirestoreDocument } from './store/UpdateDataSlice';
import Modal from 'react-bootstrap/Modal';

const EditItem = ({ selectedItem, setShow, show }) => {

    const [itemName, setItemName] = useState(selectedItem.itemName)
    const [itemDescription, setItemDescription] = useState(selectedItem.itemDescription)
    const [quantity, setQuantity] = useState(selectedItem.quantity)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    // Handle the update function
    const handleUpdate = (e) => {
        e.preventDefault()

        const updatedItem = {
            id: selectedItem.id,
            data: {
                itemName: itemName,
                itemDescription: itemDescription,
                quantity: quantity
            }
        }

        dispatch(updateFirestoreDocument(updatedItem));
        setShow(false)
    }

    return (
        <div className="newItems-container">
            <main className="additem-main">
                <div>
                    <h4>Update Item</h4>
                </div>
                <div className="modal">
                    <Button variant="primary" onClick={handleShow}>
                        Launch static backdrop modal
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Update Item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className=''>
                            <Form className="additem-form">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Item name:</Form.Label><br />
                                    <input
                                        type="text"
                                        placeholder="Enter item description"
                                        value={itemName}
                                        className="editInput"
                                        onChange={(e) => setItemName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Item description</Form.Label><br />
                                    <input
                                        type="text"
                                        placeholder="Enter item description"
                                        value={itemDescription}
                                        className="editInput"
                                        onChange={(e) => setItemDescription(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Quantity</Form.Label><br />
                                    <input
                                        type="text"
                                        placeholder="Enter item description"
                                        value={quantity}
                                        className="editInput"
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="dark" onClick={handleUpdate}>Update</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </main>
        </div>
    )
}

export default EditItem