import { create } from "zustand";

export const ToDoList = create((set, get) => ({
  data: [
    {
      id: 1,
      name: "Iso Musoev",
      age: 18,
      status: true,
      email: "iso@example.com",
      phone: "900000001",
    },
    {
      id: 2,
      name: "Ali Karimov",
      age: 22,
      status: false,
      email: "ali@example.com",
      phone: "900000002",
    },
    {
      id: 3,
      name: "Jamshed Rahimov",
      age: 25,
      status: true,
      email: "jamshed@example.com",
      phone: "900000003",
    },
    {
      id: 4,
      name: "Farid Nazarov",
      age: 19,
      status: false,
      email: "farid@example.com",
      phone: "900000004",
    },
    {
      id: 5,
      name: "Said Umarov",
      age: 27,
      status: true,
      email: "said@example.com",
      phone: "900000005",
    },
  ],
  deleteUser: (id: number) =>
    set((state: any) => ({
      data: state.data.filter((e: any) => e.id != id),
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
  changeStatus: (id: number) =>
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
}));
