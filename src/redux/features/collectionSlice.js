import { createSlice } from "@reduxjs/toolkit";
import { toast, Slide } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem('collections')) || []
};

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection(state, action) {
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            );

            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem(
                    'collections',
                    JSON.stringify(state.items)
                );
                console.log("Added to collections");
            }
        },

        removeCollection(state, action) {
            state.items = state.items.filter(
                item => item.id !== action.payload.id
            );
            localStorage.setItem(
                'collections',
                JSON.stringify(state.items)
            );
        },

        clearCollections(state) {
            state.items = [];
            localStorage.removeItem('collections');
        },

        addedToast:() => {
            toast.success('Image added to collection!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        },

        removedToast: () => {
             toast.error('Image removed from collection!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        },

        removedAllToast: () => {
                toast.error('All images removed from collection!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
    }
});

export const {
    addCollection,
    removeCollection,
    clearCollections,
    addedToast,
    removedToast,
    removedAllToast
} = collectionSlice.actions;

export default collectionSlice.reducer;
