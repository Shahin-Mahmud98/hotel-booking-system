// import { createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//     rooms:[],
//     isLoading:false,
//     isSuccess: false,
//     isError:false,
//     message:"",
// };

// //create room
// export const createRoom = createAsyncThunk(
//     "room/create",
//    async (roomData,thunkApi) => {
//     try {
//         const res = await fetch("/api/rooms",{
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             method:"POST",
//             body:JSON.stringify(roomData),
//         });
//         if (!res.ok) {
//             const error = await res.json();
//             return thunkApi.rejectWithValue(error);
//         }
//         const data = await res.json();
//         return data;

//     } catch (error) {
//         console.log(error.message);
//         return thunkApi.rejectWithValue(error.message);
//     }
//    }
// )

// extraReducers:(builder) =>{
//     //add cases here 
//     builder
//     .addCase(createRoom.pending,(state)=>{
//         state.isLoading = true;
//     })
//     .addCase(createRoom.fulfilled,(state,action)=> {
//         state.isLoading = false,
//         state.isSuccess = false,
//         state.rooms.push(action.payload); // Assuming `action.payload` is the created room
        
//     })
//     .addCase(createRoom.rejected,(state,action)=>{
//         state.isLoading = false,
//         state.isError = true;
//         state.message = action.payload;
//     })
// }


// // eslint-disable-next-line no-undef
// export const {reset} = roomSlice.actions;
// // eslint-disable-next-line no-undef
// export default roomSlice.reducer;


//chatgpt
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

// Async thunk for creating a room
export const createRoom = createAsyncThunk(
  "room/create",
  async (roomData, thunkApi) => {
    try {
      const res = await fetch("http://localhost:5000/api/rooms", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(roomData),
      });
      if (!res.ok) {
        const error = await res.json();
        return thunkApi.rejectWithValue(error);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Create the room slice
export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRoom.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.rooms.push(action.payload); // Assuming `action.payload` is the created room
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// Export actions and reducer
export const { reset } = roomSlice.actions;
export default roomSlice.reducer;
