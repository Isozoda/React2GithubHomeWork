import { atom } from "jotai";
import axios from "axios";
import { loadable } from "jotai/utils";

const api = "https://696620dbf6de16bde44c4ef3.mockapi.io/Studentsofcrm";

const trigger = atom(false);
export const searchAtom = atom("");
export const selectAtom = atom("");

const GetData = atom(async (get) => {
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

export const deleteAtom = atom(null, async (get, set, id: number) => {
  await axios.delete(`${api}/${id}`);
  set(trigger, !get(trigger));
});

export const AddNewUser = atom(null, async (get, set, newUser: any) => {
  await axios.post(api, newUser);
  set(trigger, !get(trigger));
});

export const EditUser = atom(null, async (get, set, obj: any) => {
  await axios.put(`${api}/${obj.id}`, obj);
  set(trigger, !get(trigger));
});

export const loadableAtom = loadable(GetData);
