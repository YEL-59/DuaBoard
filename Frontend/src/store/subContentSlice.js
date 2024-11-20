// subContentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const subContentSlice = createSlice({
  name: "subContent",
  initialState: { selectedItem: {} }, // Ensure this is an empty object, not null
  reducers: {
    setSubContent: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSubContent } = subContentSlice.actions;
export default subContentSlice.reducer;
