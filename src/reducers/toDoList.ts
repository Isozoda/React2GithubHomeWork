import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface IData {
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
  data: [
    {
      id: 1,
      name: "Iso Musoev",
      age: 18,
      email: "iso@gmail.com",
      phone: "205266884",
      status: true,
    },
    {
      id: 2,
      name: "Muhammad Usmonov",
      age: 20,
      email: "muhammad@gmail.com",
      phone: "938884221",
      status: false,
    },
    {
      id: 3,
      name: "Ahmad Rahimov",
      age: 22,
      email: "ahmad@gmail.com",
      phone: "904567321",
      status: true,
    },
    {
      id: 4,
      name: "Farrukh Karimov",
      age: 19,
      email: "farrukh@gmail.com",
      phone: "917654123",
      status: false,
    },
    {
      id: 5,
      name: "Zafar Sharipov",
      age: 25,
      email: "zafar@gmail.com",
      phone: "927345678",
      status: true,
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
        e.id === payload
          ? {
              ...e,
              status: !e.status,
            }
          : e,
      );
    },
    addUser: (state, { payload }) => {
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
export const { deleteUser, changeStatus, addUser, editUser } =
  counterSlice.actions;

export default counterSlice.reducer;
