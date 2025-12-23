import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
};

const applicationsSlice = createSlice({
   name: "applications",
   initialState,
   reducers: {
      setApplications: (state, action) => {
         state.items = action.payload;
      },
   },
});

export const { setApplications } = applicationsSlice.actions;
export default applicationsSlice.reducer;
