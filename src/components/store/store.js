import { configureStore } from "@reduxjs/toolkit";
import addDataSlice from "./AddDataSlice";
import dataSlice from "./FetchDataSlice";

const store = configureStore({
    reducer:{
        addData: addDataSlice,
        data: dataSlice,
        deleteItem: dataSlice,
        updateItem: dataSlice
    }
});

export default store;