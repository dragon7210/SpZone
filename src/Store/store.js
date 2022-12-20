import { configureStore } from "@reduxjs/toolkit";
import totalCountReducer from "Reducer/totalCount";

export const store = configureStore({
  reducer: {
    totalCount: totalCountReducer,
  },
});
