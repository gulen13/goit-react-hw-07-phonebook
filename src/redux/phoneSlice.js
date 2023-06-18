import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null
}

const pendingAction = action => action.type.endsWith('/pending');

const rejectedAction = action => action.type.endsWith('/rejected');

const handlePending = (state) => {
  state.isLoading = true
  state.error = ''
}

const handleRejected = (state, { payload }) => {
  state.isLoading = false
  state.error = payload
}

const handleFetchContactsFulfilled = (state, { payload }) => {
  state.items = payload
  state.error = null;
  state.isLoading = false
}
// const handleFulfilledContactsDetails = (state, { payload }) => {
//   state.isLoading = false
//   state.productDetails = payload
// }

const phoneSlice = createSlice({
  name: "phones",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled,)
      .addMatcher(pendingAction, handlePending)
      .addMatcher(rejectedAction, handleRejected)
  },
});

export const { addPhone, deletePhone } = phoneSlice.actions;
export const phoneReducer = phoneSlice.reducer;

// reducers: {
//   addPhone: {
//     reducer(state, action) {
//       state.push(action.payload);
//     },
//     prepare(name, number) {
//       return {
//         payload: {
//           id: nanoid(),
//           name,
//           number
//         },
//       };
//     },
//   },
//   deletePhone(state, action) {
//     const index = state.findIndex(phone => phone.id === action.payload);
//     state.splice(index, 1);
//   },
// },