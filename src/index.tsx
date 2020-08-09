import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useModalContext } from './contexts/modalContext';
import { useThemeContext } from './contexts/themeContex';

import Header from './components/header';
import Home from './pages/home';

import MenuModal from './components/menu';

const Index = () => {

  const { menuIsOpen} = useModalContext();
  const { theme } = useThemeContext();

  const getStatusbarColor = () => {
    return theme?.title === 'light' ? 'dark' : 'light';
  }

  return (
    <>
      <StatusBar style={getStatusbarColor()} />
      <Header />
      <Home />
      {menuIsOpen && <MenuModal />}
    </>
  );
}

export default Index;