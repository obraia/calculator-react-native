import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Reducers } from './interfaces';

import Header from './components/header';
import Home from './pages/home';
import MenuModal from './components/menu';

const Index = () => {

  const { theme } = useSelector((state: Reducers) => state.themeReducers);
  const menuIsOpen = useSelector((state: Reducers) => state.menuReducers.isOpen);

  const getStatusbarColor = () => {
    return theme?.title === 'light' ? 'dark' : 'light';
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={getStatusbarColor()} />
      <Header />
      <Home />
      {menuIsOpen && <MenuModal />}
    </ThemeProvider>
  );
}

export default Index;