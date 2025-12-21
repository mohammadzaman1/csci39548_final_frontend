import { createSlice } from "@reduxjs/toolkit";
import { mockInternships } from "../services/mockInternships";

const initialState = {
   items: mockInternships, // later this will come from backend
};

const internshipsSlice = createSlice({
   name: "internships",
   initialState,
   reducers: {
      setInternships: (state, action) => {
         state.items = action.payload;
      },
   },
});

export const { setInternships } = internshipsSlice.actions;
export default internshipsSlice.reducer;
