import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const UseAppDispatch: DispatchFunc = useDispatch;
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
