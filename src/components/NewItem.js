import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import { Button, Form } from 'react-bootstrap'
import {addItem} from './store/AddDataSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NewItem = () => {

  const [itemName, setItemName] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [quantity, setQuantity] = useState('')

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAdd = (async (e) => {
    e.preventDefault()

    dispatch(addItem({
      itemName: itemName,
      itemDescription: itemDescription,
      quantity: quantity
    }));

    navigate("/");
  })

  return (
    <div className="newItems-container">
      <header>
        <NavigationBar />
      </header>
      <main className="additem-main">
        <div>
          <h4>Add New Item</h4>
        </div>
        <div>
          <Form className="additem-form" onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Item name:</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter item name" 
                onChange={(e) => setItemName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Item description</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter item description" 
                onChange={(e) => setItemDescription(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter quantity" 
                onChange={(e) => setQuantity(e.target.value)}/>
            </Form.Group>
            <div className="newiten-btn">
            <Button  variant="dark" type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </div>
      </main>
    </div>
  )
}

export default NewItem