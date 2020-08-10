import React, { createContext, useContext, useEffect } from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import userPersistedState from '../utils/userPersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

interface Theme {
  theme?: DefaultTheme;
  setTheme?: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  toggleTheme?: () => void;
  setButtonsRadius?: (value: number) => void;
  setPrimaryColor?: (value: string) => void;
}

const ThemeContext = createContext<Theme>({});

export default function ThemeConfigProvider({ children }: any) {

  const [theme, setTheme] = userPersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const setButtonsRadius = (value: number) => {
    const newTheme = {...theme};
    newTheme.shapes.buttonRadius = value;
    setTheme(newTheme);
  }

  const setPrimaryColor = (value: string) => {
    const newTheme = { ...theme };
    newTheme.colors.primary = value;
    setTheme(newTheme);
  }

  useEffect(() => {
    light.shapes.buttonRadius = Number(theme.shapes.buttonRadius);
    dark.shapes.buttonRadius = Number(theme.shapes.buttonRadius);
  }, [theme.shapes.buttonRadius])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setButtonsRadius, setPrimaryColor }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  const {
    theme,
    toggleTheme = () => console.log('Not implemented'),
    setButtonsRadius = () => console.log('Not implemented'),
    setPrimaryColor = () => console.log('Not implemented'),
  } = context;
  return { theme, toggleTheme, setButtonsRadius, setPrimaryColor };
}