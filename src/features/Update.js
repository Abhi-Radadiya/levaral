import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { Email: "", Subject: "", Massage: ""};

export const newEmail = createSlice({
  name: "newEmail",
  initialState: { value: initialStateValue },
  reducers: {
    updatedEmail: (state, action) => {
      state.value = action.payload;
    
    },
  },
});

export const { updatedEmail } = newEmail.actions;

export default newEmail.reducer;