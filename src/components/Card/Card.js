import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/FetchDataSlice";
import { deleteItem } from "../store/AddDataSlice";
import EditItem from "../EditItem/EditItem";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const Card = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.data);

  // Handles edit function
  const handleEdit = (id) => {
    const [item] = data.filter((item) => item.id === id);
    setSelectedItem(item);
    setShow(true);
  };

  // Handles delete function
  const handleDelete = (id) => {
    dispatch(
      deleteItem({
        id: id,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [data]);

  return (
    <div className="card-container">
      <div className="w-[100%]">
        <ul className="w-full divide-y divide-gray-100">
          {data &&
            data.map((item, index) => (
              <>
                <li key={index} className="flex justify-between gap-x-6 py-5">
                  <div className="flex flex-row justify-between w-3/4">
                    <div>
                    <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    </div>
                    <div className="w-1/3">
                      <p className="sm:text-xs md:text-sm xl:text-lg  font-semibold leading-6 text-gray-900 text-start">
                        {item.itemName}
                      </p>
                    </div>
                    <div className="w-1/3">
                      <p className="mt-1 sm:text-xs md:text-sm xl:text-lg leading-5 text-gray-500 text-start">
                        {item.itemDescription}
                      </p>
                    </div>
                    <div>
                      <p className="mt-1 sm:text-xs md:text-sm xl:text-lg leading-5 text-gray-500">
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="sm:flex sm:flex-row sm:items-end">
                    <PencilIcon
                      aria-hidden="true"
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                      className="h-6 w-6 mr-6 text-black sm:h-5 sm:w-5 md:h-6 md:w-6 "
                    />
                    <TrashIcon
                      aria-hidden="true"
                      onClick={() => handleDelete(item.id)}
                      className="h-6 w-6 text-red-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    />
                  </div>
                </li>
              </>
            ))}
        </ul>
      </div>
      <div>
        {show && (
          <EditItem
            setShow={setShow}
            show={show}
            selectedItem={selectedItem}
            // setOpenEdit={setOpenEdit}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
