import { createSlice } from "@reduxjs/toolkit";

interface IData {
  name: string;
  age: string;
  email: string;
  phone: string;
  status: boolean;
  id: number;
}

export interface CounterState {
  data: IData[];
}

const initialState: CounterState = {
  data: [
    {
      name: "Iso Musoev",
      age: "17",
      email: "isomusoev@gmail.com",
      phone: "205686884",
      status: true,
      id: 1,
    },
    {
      name: "Usuf Samadov",
      age: "18",
      email: "usufsamadov@gmail.com",
      phone: "901046554",
      status: false,
      id: 2,
    },
    {
      name: "Umar Alimov",
      age: "25",
      email: "umaralimov@gmail.com",
      phone: "112306548",
      status: true,
      id: 3,
    },
    {
      name: "Ziyoev Mahdi",
      age: "35",
      email: "ziyoevmahdi@gmail.com",
      phone: "988846526",
      status: false,
      id: 4,
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    deleteUser: (state, { payload }) => {
      state.data = state.data.filter((e) => e.id != payload);
    },
    changeStatus: (state, { payload }) => {
      state.data = state.data.map((e) =>
        e.id == payload
          ? {
              ...e,
              status: !e.status,
            }
          : e,
      );
    },
    addNewUser: (state, { payload }) => {
      state.data.push({
        id: Date.now(),
        status: false,
        ...payload,
      });
    },
    editUser: (state, { payload }) => {
      state.data = state.data.map((e) => (e.id == payload.id ? payload : e));
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteUser, changeStatus, addNewUser, editUser } =
  counterSlice.actions;

export default counterSlice.reducer;
