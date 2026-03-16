import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://696620dbf6de16bde44c4ef3.mockapi.io/Studentsofcrm";

export interface IData {
  name: string;
  age: number;
  email: string;
  phone: string;
  id: number;
  status: boolean;
}

export interface CounterState {
  data: IData[];
}

const initialState: CounterState = {
  data: [],
};

export const GetData = createAsyncThunk(
  "counter/GetData",
  async (value: string | undefined) => {
    try {
      if (value) {
        const { data } = await axios.get(`${api}?status=${value}`);
        return data;
      }
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
  },
);

export const DeleteData = createAsyncThunk(
  "counter/DeleteData",
  async (id: number, { dispatch }) => {
    try {
      await axios.delete(`${api}/${id}`);
      dispatch(GetData());
    } catch (error) {
      console.error(error);
    }
  },
);

export const AddNewUser = createAsyncThunk(
  "counter/AddNewUser",
  async (newUser: any, { dispatch }) => {
    try {
      await axios.post(api, newUser);
      dispatch(GetData());
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
      dispatch(GetData());
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
    builder.addCase(GetData.pending, () => {
      console.log("Panding");
    });
    builder.addCase(GetData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
