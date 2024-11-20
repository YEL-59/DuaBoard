import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import subContentReducer from "./subContentSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    subContent: subContentReducer,
  },
});

export default store;
