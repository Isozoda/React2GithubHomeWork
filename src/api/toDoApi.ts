import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://37.27.29.18:8001/api/to-dos";
export const apiImage = "http://37.27.29.18:8001/images";
export const apiCheck = "http://37.27.29.18:8001/completed";

export const GetData: any = createAsyncThunk("counter/GetData", async () => {
  try {
    const { data } = await axios.get(api);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

export const DeleteUser: any = createAsyncThunk(
  "counter/DeleteUser",
  async (id: number, { dispatch }) => {
    try {
      await axios.delete(`${api}?id=${id}`);
      dispatch(GetData());
    } catch (error) {
      console.error(error);
    }
  },
);

export const DeleteImage: any = createAsyncThunk(
  "counter/DeleteImage",
  async (id: number, { dispatch }) => {
    try {
      await axios.delete(`${api}/images/${id}`);
      dispatch(GetData());
    } catch (error) {
      console.error(error);
    }
  },
);

export const CheckStatus: any = createAsyncThunk(
  "counter/CheckStatus",
  async (id: number, { dispatch }) => {
    try {
      await axios.put(`${apiCheck}?id=${id}`);
      dispatch(GetData());
    } catch (error) {
      console.error(error);
    }
  },
);

export const EditUser: any = createAsyncThunk(
  "counter/EditUser",
  async (obj: any, { dispatch }) => {
    try {
      await axios.put(`${api}?id=${obj.id}`, obj);
      dispatch(GetData());
    } catch (error) {
      console.error(error);
    }
  },
);

export const AddUser: any = createAsyncThunk(
  "counter/AddUser",
  async (newUser: any, { dispatch }) => {
    try {
      await axios.post(api, newUser);
      dispatch(GetData());
    } catch (error) {
      console.error(error);
    }
  },
);

export const AddImage: any = createAsyncThunk(
  "counter/AddImage",
  async ({ id, formData }: any, { dispatch }) => {
    try {
      await axios.post(`${api}/${id}/images`, formData);
      dispatch(GetData());
    } catch (error) {
      console.error(error);
    }
  },
);

export const InfoData: any = createAsyncThunk(
  "counter/InfoData",
  async (id: number) => {
    try {
      const { data } = await axios.get(`${api}/${id}`);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  },
);

