import { GetData, infoData } from "@/api/ToDoApi";
import { createSlice } from "@reduxjs/toolkit";

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
  info: null;
}

const initialState: CounterState = {
  data: [],
  info: null,
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
    builder.addCase(infoData.fulfilled, (state, action) => {
      state.info = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
