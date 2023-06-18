import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://648f4de875a96b664444f7d7.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   "tasks/addTask",
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post("/tasks", { text });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "tasks/deleteTask",
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/tasks/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );