import { DefaultTheme } from 'styled-components';

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
  mode: 'default' | 'intervalo de confiança';
  intervaloConfianca: {
    result: string;
    amostraA: Array<number>;
    amostraB: Array<number>;
    nivelConfianca: string;
    step: 1 | 2 | 3;
  };
}

export interface MenuState {
  isOpen: Boolean;
}

export interface Reducers {
  themeReducers: ThemeState;
  calcReducers: CalcState;
  menuReducers: MenuState;
}
