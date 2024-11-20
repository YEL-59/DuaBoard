
import { createSlice } from "@reduxjs/toolkit";

const subContentSlice = createSlice({
  name: "subContent",
  initialState: null, // No content selected by default
  reducers: {
    setSubContent: (state, action) => action.payload,
    clearSubContent: () => null,
  },
});

export const { setSubContent, clearSubContent } = subContentSlice.actions;
export default subContentSlice.reducer;
