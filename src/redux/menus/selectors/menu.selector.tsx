import { RootState } from "../../store";

export const currentMenu = (state: RootState) =>
  state.activeMenu.activeMenuItem;
export const actionMenu = (state: RootState) => state.activeMenu.actionMenuItem;
