// import { configureStore,combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import { ActiveMenuIcon } from "./reducers/menu.reducer";
import { configureStore } from "@reduxjs/toolkit";

 

export const store = configureStore({
  reducer: {
    activeMenu: ActiveMenuIcon,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
