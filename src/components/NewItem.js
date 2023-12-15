import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import { Button, Form } from 'react-bootstrap'
import { addItem } from './store/AddDataSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import InputField from './InputField'

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
    <Box sx={{
      width: { xs: 400, sm: 786, md: 1024 },
      height: "100vh",
      backgroundColor: '#567189',
      margin: 'auto',
    }}
    >
      <header>
        <NavigationBar />
      </header>
      <main>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto'
        }}>
          <Box sx={{ marginTop: 5 }}>
            <h4>Add New Item</h4>
          </Box>
          <Box
            sx={{
              width: { xs: 400, sm: 500, md: 800 },
              display:'flex',
              justifyContent:'center',
              marginTop: 2,
            }}>
            <form>
              <Box sx={{ width: { xs: 300, sm: 500, md: 700 }, marginTop: 2 }}>
                <label>Name</label>
                <InputField
                  type="text"
                  placeholder="Enter item name"
                  onChange={(e) => setItemName(e.target.value)}
                />
              </Box>
              <Box sx={{ width: { xs: 300, sm: 500, md: 700 }, marginTop: 2 }}>
                <label>Description</label>
                <InputField
                  type="text"
                  placeholder="Enter item description"
                  onChange={(e) => setItemDescription(e.target.value)}
                />
              </Box>
              <Box sx={{ width: { xs: 300, sm: 500, md: 700 }, marginTop: 2 }}>
                <label>Quantity</label>
                <InputField
                  type="text"
                  placeholder="Enter quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Box>
              <Box sx={{ display:'flex', justifyContent:'center', marginTop: 2 }}>
                <Button sx={{width:400}} onClick={handleAdd}>Add</Button>
              </Box>
            </form>
          </Box>
        </Box>
      </main>
    </Box>
  )
}

export default NewItem