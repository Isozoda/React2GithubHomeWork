import axios from "axios";
import { atom } from "jotai";
import { loadable } from "jotai/utils";

const api = "https://696620dbf6de16bde44c4ef3.mockapi.io/Studentsofcrm";

const trigger = atom(false);

export const searchAtom = atom("");
export const selectAtom = atom("");

export const GetData = atom(async (get) => {
  get(trigger);
  const searchValue = get(searchAtom);
  const selectValue = get(selectAtom);
  try {
    const { data } = await axios.get(
      searchValue && selectValue
        ? `${api}?name=${searchValue}&status=${selectValue}`
        : searchValue
          ? `${api}?name=${searchValue}`
          : selectValue
            ? `${api}?status=${selectValue}`
            : api,
    );
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const DeleteUser = atom(null, async (get: any, set: any, id: number) => {
  try {
    await axios.delete(`${api}/${id}`);
    set(trigger, !get(trigger));
  } catch (error) {
    console.error(error);
  }
});

export const AddNewUser = atom(
  null,
  async (get: any, set: any, newUser: any) => {
    try {
      await axios.post(api, newUser);
      set(trigger, !get(trigger));
    } catch (error) {
      console.error(error);
    }
  },
);

export const EditUser = atom(null, async (get: any, set: any, obj: any) => {
  try {
    await axios.put(`${api}/${obj.id}`, obj);
    set(trigger, !get(trigger));
  } catch (error) {
    console.error(error);
  }
});

export const loadableAtom = loadable(GetData);
