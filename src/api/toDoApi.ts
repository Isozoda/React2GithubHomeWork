import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://37.27.29.18:8001/api/to-dos";

export const GetData = createAsyncThunk("counter/GetData", async () => {
  try {
    const { data } = await axios.get(api);
    return data.data;
  } catch (error) {
    console.error(error);
  }
});
