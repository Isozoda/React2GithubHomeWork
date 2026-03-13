import { atom } from "jotai";

export const UserAtom = atom([
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
]);

export const deleteUserAtom = atom(null, (get, set, id) => {
  set(
    UserAtom,
    get(UserAtom).filter((e) => e.id != id),
  );
});

export const changeStatusAtom = atom(null, (get, set, id) => {
  set(
    UserAtom,
    get(UserAtom).map((e) =>
      e.id == id
        ? {
            ...e,
            status: !e.status,
          }
        : e,
    ),
  );
});

export const AddNewUser = atom(null, (get, set, newUser) => {
  set(UserAtom, [
    ...get(UserAtom),
    {
      ...newUser,
      id: Date.now(),
    },
  ]);
});

export const editUserAtom = atom(null, (get, set, obj) => {
  set(
    UserAtom,
    get(UserAtom).map((e) => (e.id == obj.id ? obj : e)),
  );
});
