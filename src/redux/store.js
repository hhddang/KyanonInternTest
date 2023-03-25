import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profileSlice";

export default configureStore({
  reducer: {
    profile: profileSlice.reducer,
  },
});
