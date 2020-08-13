import { DefaultTheme } from "styled-components";

export interface ButtonProps {
  command: string;
  type: string;
  icon: any;
}

export interface ThemeState {
  theme: DefaultTheme;
}

export interface CalcState {
  result: string;
  expression: string;
}

export interface MenuState {
  isOpen: Boolean;
}

export interface Reducers {
  themeReducers: {
    theme: DefaultTheme;
  };
  calcReducers: {
    result: string;
    expression: string;
  };
  menuReducers: {
    isOpen: Boolean;
  };
}