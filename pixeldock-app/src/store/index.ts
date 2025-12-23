import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/src/services/api";

export const store = configureStore({
  reducer: {
    // RTK Query reducer
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // RTK Query middleware
});

// Type definitions for TypeScript
export type RootState = ReturnType<typeof store.getState>; // State type
export type AppDispatch = typeof store.dispatch;           // Dispatch type
