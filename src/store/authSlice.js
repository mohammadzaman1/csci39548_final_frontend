import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("auth") || "null");

const initialState = {
   user: saved?.user || null,
   token: saved?.token || null,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      loginSuccess: (state, action) => {
         state.user = action.payload.user;
         state.token = action.payload.token;
         localStorage.setItem(
            "auth",
            JSON.stringify({ user: state.user, token: state.token })
         );
      },
      logout: (state) => {
         state.user = null;
         state.token = null;
         localStorage.removeItem("auth");
      },
   },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
