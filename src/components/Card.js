import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './store/FetchDataSlice'
import { deleteItem } from './store/AddDataSlice'
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri'
import EditItem from './EditItem';
import { Box } from '@mui/material';

const Card = () => {

  const [selectedItem, setSelectedItem] = useState()
  const [openEdit, setOpenEdit] = useState(false)
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.data);

  // Handles edit function
  const handleEdit = id => {
    const [item] = data.filter(item => item.id === id);
    setSelectedItem(item)
    setShow(true)
    setOpenEdit(true)
  };


  // Handles delete function
  const handleDelete = (id) => {

    dispatch(
      deleteItem({
        id: id
      })
    );
  }

  useEffect(() => {

    dispatch(fetchData())

  }, [data]);

  return (
    <Box >
      <Box>
        {data && data.map(item => (
          <Box sx={{ width: { xs: 360, sm: 500, md: 786 },backgroundColor:'#CFB997' }} className="item-card" key={item.id}>
            <Box className="card-checkbox">
              <input value="test" type="checkbox" />
            </Box>
            <Box className="card-details">
              <h4>{item.itemName}</h4>
              <p>{item.itemDescription}</p>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginRight:1 }}>
              <Box>
                <p>{item.quantity}</p>
              </Box>
              <Box className="card-btn-icon">
                <span><GrEdit onClick={() => { handleEdit(item.id) }} /></span>
                <span><RiDeleteBin6Line onClick={() => handleDelete(item.id)} /></span>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        {show && <EditItem setShow={setShow} show={show} selectedItem={selectedItem} setOpenEdit={setOpenEdit} />}
      </Box>
    </Box>
  )
}

export default Card