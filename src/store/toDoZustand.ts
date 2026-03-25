import { create } from "zustand";
import axios from "axios";

const api = "http://37.27.29.18:8001/api/to-dos";
const apiImage = "http://37.27.29.18:8001/api/to-dos/images";
const checkApi = "http://37.27.29.18:8001/completed";

export const ToDoZustand = create((set, get: any) => ({
  data: [],
  GetData: async () => {
    try {
      const { data } = await axios.get(api);
      set({ data: data.data });
    } catch (error) {
      console.error(error);
    }
  },
  DeleteUser: async (id: number) => {
    try {
      await axios.delete(`${api}?id=${id}`);
      get().GetData();
    } catch (error) {
      console.error(error);
    }
  },
  DeleteImage: async (id: number) => {
    try {
      await axios.delete(`${apiImage}/${id}`);
      get().GetData();
    } catch (error) {
      console.error(error);
    }
  },
  CheckStatus: async (id: number) => {
    try {
      await axios.put(`${checkApi}?id=${id}`);
      get().GetData();
    } catch (error) {
      console.error(error);
    }
  },
  AddNewUser: async (FormData: FormData) => {
    try {
      await axios.post(api, FormData);
      get().GetData();
    } catch (error) {
      console.error(error);
    }
  },
  EditUser: async (obj: any) => {
    try {
      await axios.put(`${api}?id=${obj.id}`, obj);
      get().GetData();
    } catch (error) {
      console.error(error);
    }
  },
  AddImage: async (FormData: FormData, idx: number) => {
    try {
      await axios.post(`${api}/${idx}/images`, FormData);
      get().GetData();
    } catch (error) {
      console.error(error);
    }
  },
}));
