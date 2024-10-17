import React, { useState } from "react";
// import { Button, Form } from 'react-bootstrap'
import { addItem } from "../store/AddDataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAdd = async (e) => {
    e.preventDefault();

    dispatch(
      addItem({
        itemName: itemName,
        itemDescription: itemDescription,
        quantity: quantity,
      })
    );

    navigate("/");
  };

  return (
    <div className="w-full flex items-center justify-center newItems-container">
      <main className="w-4/5 h-full">
        <div className="mt-6">
          <h2 className="text-center font-bold mt-8">Add New Item</h2>
        </div>
        <div className="mt-8">
          <form onSubmit={handleAdd}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 flex flex-col gap-y-6">
                  <div className="">
                    <label
                      htmlFor="item-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Item name:
                    </label>
                    <div className="mt-2">
                      <input
                        id="item-name"
                        name="item-name"
                        type="text"
                        placeholder=" Enter item name" 
                        onChange={(e) => setItemName(e.target.value)}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Item description:
                    </label>
                    <div className="mt-2">
                      <input
                        id="description"
                        name="description"
                        type="text"
                        placeholder=" Enter item description" 
                        onChange={(e) => setItemDescription(e.target.value)}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Quantity:
                    </label>
                    <div className="mt-2">
                      <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        placeholder=" Enter quantity" 
                        onChange={(e) => setQuantity(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Button section */}
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default NewItem;
