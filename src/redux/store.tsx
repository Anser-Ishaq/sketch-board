// import { configureStore,combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import { ActiveMenuIcon } from "./menus/reducers/menu.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { ToolBoxHandler } from "./toolbox/reducers/tool.reducer";

 

export const store = configureStore({
  reducer: {
    activeMenu: ActiveMenuIcon,
    toolbox:ToolBoxHandler
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
