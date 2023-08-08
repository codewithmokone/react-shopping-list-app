import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './store/FetchDataSlice'
import { deleteItem } from './store/AddDataSlice'
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri'
import EditItem from './EditItem';

const Card = () => {

  const [selectedItem, setSelectedItem] = useState()
  const [openEdit, setOpenEdit] = useState(false)
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const { loading, error, data } = useSelector((state) => state.data);

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
    <div className="card-container">
      <div>
        {data && data.map(item => (
          <div className="item-card" key={item.id}>
            <div className="card-checkbox">
              <input value="test" type="checkbox" />
            </div>
            <div className="card-details">
              <h4>{item.itemName}</h4>
              <p>{item.itemDescription}</p>
            </div>
            <div className="card-number">
              <p>{item.quantity}</p>
              <div className="card-btn-icon">
                <span><GrEdit onClick={() => { handleEdit(item.id) }} /></span>
                <span><RiDeleteBin6Line onClick={() => handleDelete(item.id)} /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {show && <EditItem setShow={setShow} show={show} selectedItem={selectedItem} setOpenEdit={setOpenEdit} />}
      </div>
    </div>
  )
}

export default Card