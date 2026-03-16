import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const api = "https://696620dbf6de16bde44c4ef3.mockapi.io/Studentsofcrm";

interface ToDoListState {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  status: boolean;
  isLoading: boolean;
}

export interface CounterState {
  data: ToDoListState[];
}

const initialState: CounterState = {
  data: [],
  //   isLoading: false,
};

export const Getdata = createAsyncThunk("counter/Getdata", async (value) => {
  try {
    if (value) {
      const { data } = await axios.get(`${api}?name=${value}`);
      return data;
    } else {
      const { data } = await axios.get(api);
      return data;
    }
  } catch (error) {
    console.error(error);
  }
});
export const DeleteData = createAsyncThunk(
  "counter/DeleteData",
  async (id: number, { dispatch }) => {
    try {
      await axios.delete(`${api}/${id}`);
      dispatch(Getdata());
    } catch (error) {
      console.error(error);
    }
  },
);
export const AddUser = createAsyncThunk(
  "counter/AddUser",
  async (newUser, { dispatch }) => {
    try {
      await axios.post(api, newUser);
      dispatch(Getdata());
    } catch (error) {
      console.error(error);
    }
  },
);
export const EditUser = createAsyncThunk(
  "counter/EditUser",
  async (obj: any, { dispatch }) => {
    try {
      await axios.put(`${api}/${obj.id}`, obj);
      dispatch(Getdata());
    } catch (error) {
      console.error(error);
    }
  },
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(Getdata.pending, (state, action) => {
      console.log("Panding");
      //   state.isLoading = true;
    });
    builder.addCase(Getdata.fulfilled, (state, action) => {
      state.data = action.payload;
      //   state.isLoading = false;
    });
  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
