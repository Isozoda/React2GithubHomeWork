import { create } from "zustand";
import axios from "axios";

const api = "https://696620dbf6de16bde44c4ef3.mockapi.io/Studentsofcrm";

export const ToDoZustand = create((set, get: any) => ({
  data: [],
  GetData: async () => {
    try {
      const { data } = await axios.get(api);
      set({ data });
    } catch (error) {
      console.error(error);
    }
  },
  SearchUser: async (value: string) => {
    try {
      const { data } = await axios.get(`${api}?name=${value}`);
      set({ data });
    } catch (error) {
      console.error(error);
    }
  },
  SelectUser: async (value: string) => {
    try {
      const { data } = await axios.get(`${api}?status=${value}`);
      set({ data });
    } catch (error) {
      console.error(error);
    }
  },
  DeleteUser: async (id: number) => {
    try {
      await axios.delete(`${api}/${id}`);
      get().GetData();
    } catch (error) {
      console.error(error);
    }
  },
  AddNewUser: async (newUser: any) => {
    try {
      await axios.post(api, newUser);
      get().GetData();
    } catch (error) {
      console.error(error);
    }
  },
  EditUser: async (obj: any) => {
    try {
      await axios.put(`${api}/${obj.id}`, obj);
      get().GetData();
    } catch (error) {
      console.error(error);
    }
  },
}));
