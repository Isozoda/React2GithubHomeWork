import { create } from "zustand";

export const useToDo = create((set, get) => ({
  data: [
    {
      id: 1,
      name: "Iso Musoev",
      age: 18,
      phone: "+992900123456",
      email: "iso@gmail.com",
      status: true,
    },
    {
      id: 2,
      name: "Muhammad Ali",
      age: 16,
      phone: "+992901234567",
      email: "muhammad@gmail.com",
      status: false,
    },
    {
      id: 3,
      name: "Ahmad Rahimov",
      age: 22,
      phone: "+992935678901",
      email: "ahmad@gmail.com",
      status: true,
    },
    {
      id: 4,
      name: "Ali Karimov",
      age: 20,
      phone: "+992987654321",
      email: "ali@gmail.com",
      status: false,
    },
    {
      id: 5,
      name: "Said Ismoilov",
      age: 19,
      phone: "+992905551234",
      email: "said@gmail.com",
      status: true,
    },
  ],
  deleteUser: (id: number) => {
    set((state: any) => ({ data: state.data.filter((e: any) => e.id != id) }));
  },
  addUser: (name: any) =>
    set((state: any) => ({
      data: [...state.data, { id: Date.now(), status: false, ...name }],
    })),
  editUser: (obj: any) =>
    set((state: any) => ({
      data: state.data.map((e: any) => (e.id == obj.id ? obj : e)),
    })),
  changeStatus: (id: number) =>
    set((state: any) => ({
      data: state.data.map((e) =>
        e.id == id ? { ...e, status: !e.status } : e,
      ),
    })),
}));
