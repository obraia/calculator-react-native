import React, { createContext, useContext } from 'react';

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
    light.shapes.buttonRadius = value;
    dark.shapes.buttonRadius = value;

    setTheme(theme.title === 'light' ? {...light} : {...dark});
  }

  const setPrimaryColor = (value: string) => {
    light.colors.primary = value;
    dark.colors.primary = value;

    setTheme(theme.title === 'light' ? { ...light } : { ...dark });
  }

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