import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "profile",
  initialState: {
    fullName: "",
    dob: "",
    email: "admin@kyanon.digital",
    phone: "",
    password: "admin"
  },
  reducers: {
    fullNameChange: (state, action) => {
      state.fullName = action.payload;
    },
    dobChange: (state, action) => {
      state.dob = action.payload;
    },
    emailChange: (state, action) => {
      state.email = action.payload;
    },
    phoneChange: (state, action) => {
      state.phone = action.payload;
    },
  },
});
