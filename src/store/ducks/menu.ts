import { createActions, createReducer } from 'reduxsauce';
import { MenuState } from "../../interfaces";

const INITIAL_STATE: MenuState = {
  isOpen: false
}

const toggle = (state: MenuState = INITIAL_STATE, action: any) => {
  utils.toogleMenu(state);
  return { ...state };
} 

// Making Types and Creators
export const { Types, Creators } = createActions({
  toggleMenu: []
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_MENU]: toggle
});

const utils = {
  toogleMenu: (state: MenuState) => {
    state.isOpen = !state.isOpen;
  }
}
