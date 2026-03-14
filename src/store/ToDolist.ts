import { create } from "zustand";

import axios from "axios";

const url = "https://696620dbf6de16bde44c4ef3.mockapi.io/Studentsofcrm";

export interface IData {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  status: boolean;
}

interface IStore {
  data: IData[];
  getData: () => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
  addUser: (user: Omit<IData, "id">) => Promise<void>;
  editUser: (user: IData) => Promise<void>;
  search: (value: string) => Promise<void>;
  status: (value: string) => Promise<void>;
  changeStatus: (id: number) => void;
}

export const ToDoStore = create<IStore>((set, get: any) => ({
  data: [],
  getData: async () => {
    try {
      const { data } = await axios.get(url);
      set({ data });
    } catch (error) {
      console.error(error);
    }
  },
  deleteUser: async (id: number) => {
    try {
      await axios.delete(`${url}/${id}`);
      get().getData();
    } catch (error) {
      console.error(error);
    }
  },
  addUser: async (nuwUser: any) => {
    await axios.post(url, nuwUser);
    get().getData();
  },
  editUser: async (obj: any) => {
    await axios.put(`${url}/${obj.id}`, obj);
    get().getData();
  },
  search: async (value: any) => {
    const { data } = await axios.get(`${url}?name=${value}`);
    set({ data });
  },
  status: async (value: any) => {
    const { data } = await axios.get(`${url}?status=${value}`);
    set({ data });
  },
  changeStatus: (id: number) =>
    set((state: any) => ({
      data: state.data.map((e: any) =>
        e.id == id ? { ...e, status: !e.status } : e,
      ),
    })),
}));
