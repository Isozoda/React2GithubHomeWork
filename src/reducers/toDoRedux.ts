import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://696620dbf6de16bde44c4ef3.mockapi.io/Studentsofcrm";

export interface IData {
  name: string;
  age: number;
  email: string;
  phone: string;
  status: boolean;
  id: number;
}

export interface CounterState {
  data: IData;
}

const initialState: CounterState = {
  data: [],
};

export const GetDataRedux = createAsyncThunk(
  "counter/GetDataRedux",
  async (value: string | undefined) => {
    try {
      if (value) {
        const { data } = await axios.get(`${api}?name=${value}`);
        return data;
      }
      if (value) {
        const { data } = await axios.get(`${api}?status=${value}`);
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
      dispatch(GetDataRedux());
    } catch (error) {
      console.error(error);
    }
  },
);

export const AddUserRedux = createAsyncThunk(
  "counter/AddUserRedux",
  async (newUser: any, { dispatch }) => {
    try {
      await axios.post(api, newUser);
      dispatch(GetDataRedux());
    } catch (error) {
      console.error(error);
    }
  },
);

export const EditReduxData = createAsyncThunk(
  "counter/EditReduxData",
  async (obj: any, { dispatch }) => {
    try {
      await axios.put(`${api}/${obj.id}`, obj);
      dispatch(GetDataRedux());
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
    builder.addCase(GetDataRedux.pending, () => {
      console.log("Panding");
    });
    builder.addCase(GetDataRedux.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
