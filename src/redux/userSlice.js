// 

import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: storedUser ? JSON.parse(storedUser) : null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      if (action.payload) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
      }
    },
     logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;