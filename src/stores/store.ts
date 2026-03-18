import { configureStore } from "@reduxjs/toolkit";
import createSlice from "../reducers/toDoRedux";

export const store = configureStore({
  reducer: {
    counter: createSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
