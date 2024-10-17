import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFirestoreDocument } from "../store/UpdateDataSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";

const EditItem = ({ selectedItem, setShow }) => {
  const [itemName, setItemName] = useState(selectedItem.itemName);
  const [itemDescription, setItemDescription] = useState(
    selectedItem.itemDescription
  );
  const [quantity, setQuantity] = useState(selectedItem.quantity);

  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  // Handle the update function
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedItem = {
      id: selectedItem.id,
      data: {
        itemName: itemName,
        itemDescription: itemDescription,
        quantity: quantity,
      },
    };

    dispatch(updateFirestoreDocument(updatedItem));
    setShow(false);
  };

  return (
    <div className="newItems-container">
      <main className="additem-main">
        <div className="modal">
          <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="">
                      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <div className="block flex justify-end right-0">
                          <XMarkIcon
                            aria-hidden="true"
                            onClick={handleClose}
                            className="h-6 w-6 font-bold sm:h-5 sm:w-5 md:h-6 md:w-6 cursor-pointer"
                          />
                        </div>
                        <h3
                          class="text-base font-semibold leading-6 text-gray-900 text-center"
                          id="modal-title"
                        >
                          Update Item
                        </h3>
                        <form onSubmit={handleUpdate}>
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
                                      value={itemName}
                                      placeholder=" Enter item name"
                                      onChange={(e) =>
                                        setItemName(e.target.value)
                                      }
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
                                      value={itemDescription}
                                      placeholder=" Enter item description"
                                      onChange={(e) =>
                                        setItemDescription(e.target.value)
                                      }
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
                                      value={quantity}
                                      placeholder=" Enter quantity"
                                      onChange={(e) =>
                                        setQuantity(e.target.value)
                                      }
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Button section */}
                          <div className="mt-6 flex items-center justify-center gap-x-10">
                            <button
                              type="button"
                              onClick={handleClose}
                              className="text-sm font-semibold leading-6 text-gray-900 border px-2 py-2 rounded-md"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditItem;
