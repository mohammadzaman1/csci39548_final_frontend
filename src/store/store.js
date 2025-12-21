import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import internshipsReducer from "./internshipsSlice";
import applicationsReducer from "./applicationsSlice";

export const store = configureStore({
   reducer: {
      auth: authReducer,
      internships: internshipsReducer,
      applications: applicationsReducer,
   },
});
