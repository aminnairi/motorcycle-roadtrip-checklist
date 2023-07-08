import { createStore } from "@aminnairi/react-store";
import { State, initialState } from "./state";
import { Action, reducer } from "./reducer";

export const { StoreProvider, useDispatch, useSelector } = createStore<State, Action>({
  initialState,
  reducer
});
