import { createSlice } from "@reduxjs/toolkit";

const savedApps = JSON.parse(localStorage.getItem("applications") || "[]");

const initialState = {
   items: savedApps,
};

const persist = (items) => {
   localStorage.setItem("applications", JSON.stringify(items));
};

const applicationsSlice = createSlice({
   name: "applications",
   initialState,
   reducers: {
      addApplication: (state, action) => {
         const newApp = action.payload;
         const exists = state.items.some(
            (a) => a.internshipId === newApp.internshipId
         );
         if (!exists) {
            state.items.push(newApp);
            persist(state.items);
         }
      },
      updateStatus: (state, action) => {
         const { internshipId, status } = action.payload;
         const app = state.items.find((a) => a.internshipId === internshipId);
         if (app) {
            app.status = status;
            persist(state.items);
         }
      },
      removeApplication: (state, action) => {
         const internshipId = action.payload;
         state.items = state.items.filter(
            (a) => a.internshipId !== internshipId
         );
         persist(state.items);
      },
      clearApplications: (state) => {
         state.items = [];
         persist(state.items);
      },
   },
});

export const {
   addApplication,
   updateStatus,
   removeApplication,
   clearApplications,
} = applicationsSlice.actions;

export default applicationsSlice.reducer;
