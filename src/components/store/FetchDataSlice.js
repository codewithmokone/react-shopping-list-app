import { createSlice } from "@reduxjs/toolkit";
import { db } from "../config/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

const initialState = {
    loading: false,
    error: null,
    data: []
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        fetchDataStart(state) {
            state.loading = true;
            state.error = null
        },

        fetchDataSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
        },

        fetchDataFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { fetchDataStart, fetchDataFailure, fetchDataSuccess } = dataSlice.actions;

export const fetchData = () => async (dispatch) => {
    dispatch(fetchDataStart())

    try {
        const querySnapShot = await getDocs(collection(db, "shoppinglist"));
        const data = querySnapShot.docs.map((doc) => ({
            id: doc.id, ...doc.data()
        }))
        dispatch(fetchDataSuccess(data))
    } catch (err) {
        dispatch(fetchDataFailure(err))
    }
}


export default dataSlice.reducer;

