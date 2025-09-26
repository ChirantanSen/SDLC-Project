import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../authSlice/authSlice";
import cmsSlice from "../cmsSlice/cmsSlice";

export const store = configureStore({
  reducer: {
    Auth: authSlice.reducer,
    Cms: cmsSlice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
