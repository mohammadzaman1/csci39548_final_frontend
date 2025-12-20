import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
   reducer: {
      // add slices here later
      // auth: authReducer,
      // internships: internshipsReducer,
      // applications: applicationsReducer,
   },
});
