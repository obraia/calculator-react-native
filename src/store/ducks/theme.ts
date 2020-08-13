import { createActions, createReducer } from 'reduxsauce';
import { ThemeState } from "../../interfaces";

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

const INITIAL_STATE: ThemeState = {
  theme: { ...light }
}

const toggle = (state: ThemeState = INITIAL_STATE, action: any) => {
  state.theme = state.theme.title === 'light' ? dark : light;
  return { ...state };
}

const setRadius = (state: ThemeState = INITIAL_STATE, action: any) => {
  state.theme.shapes.buttonRadius = action.value;
  return { ...state, theme: { ...state.theme} };
}

const setPrimaryColor = (state: ThemeState = INITIAL_STATE, action: any) => {
  state.theme.colors.primary = action.value;
  return { ...state, theme: { ...state.theme } };
}

// Making Types and Creators
export const { Types, Creators } = createActions({
  toggleTheme: [],
  setRadius: ['value'],
  setPrimaryColor: ['value']
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_THEME]: toggle,
  [Types.SET_RADIUS]: setRadius,
  [Types.SET_PRIMARY_COLOR]: setPrimaryColor,
});

const utils = {

}
