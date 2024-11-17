import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice.js";
import roomReducer from "../feature/room/roomSlice.js"

export const store = configureStore({
    reducer:{
        auth: authReducer,
        room: roomReducer,
    },
});
export default store;
