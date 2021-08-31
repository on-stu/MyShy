import { createSlice } from "@reduxjs/toolkit";

export const likesSlice = createSlice({
  name: "likesCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremenent: (state) => {
      state.value += 1;
    },
    decremenent: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremenent, decremenent } = likesSlice.actions;

export default likesSlice.reducer;
