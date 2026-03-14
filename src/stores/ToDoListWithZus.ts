import { create } from "zustand";

interface IUser {
  name: string;
  age: number;
  email: string;
  phone: string;
  status: boolean;
  id: number;
}

export interface IStore {
  data: IUser[];
  deleteUser: (id: number) => void;
  changeStatus: (id: number) => void;
  addUser: (user: Omit<IUser, "id">) => void;
  editUser: (obj: IUser) => void;
}

export const ToDoListWithZus = create<IStore>((set) => ({
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
  deleteUser: (id: number): void =>
    set((state: any) => ({
      data: state.data.filter((e: any) => e.id != id),
    })),
  changeStatus: (id: number): void =>
    set((state: any) => ({
      data: state.data.map((e: any) =>
        e.id == id
          ? {
              ...e,
              status: !e.status,
            }
          : e,
      ),
    })),
  addUser: (user: any) =>
    set((state: any) => ({
      data: [
        ...state.data,
        {
          id: Date.now(),
          status: false,
          ...user,
        },
      ],
    })),
  editUser: (obj: any) =>
    set((state: any) => ({
      data: state.data.map((e: any) => (e.id == obj.id ? obj : e)),
    })),
}));
