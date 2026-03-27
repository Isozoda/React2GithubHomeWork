import { createSlice } from "@reduxjs/toolkit";
import { GetData } from "../api/toDoApi";

export interface IImg {
  id: number;
  imageName: string;
}
export interface IData {
  id: number;
  isCompleted: boolean;
  images: IImg[];
  name: string;
  description: string;
}
export interface CounterState {
  data: IData[];
}

const initialState: CounterState = {
  data: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetData.pending, () => {
      console.log("Loading ...");
    });
    builder.addCase(GetData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
