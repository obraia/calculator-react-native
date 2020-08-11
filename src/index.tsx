import React from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { useThemeContext } from './contexts/themeContex';

import Header from './components/header';
import Home from './pages/home';
import MenuModal from './components/menu';

const Index = (props: { menuIsOpen?: Boolean }) => {

  const { theme } = useThemeContext();

  const getStatusbarColor = () => {
    return theme?.title === 'light' ? 'dark' : 'light';
  }

  return (
    <>
      <StatusBar style={getStatusbarColor()} />
      <Header />
      <Home />
      {props.menuIsOpen && <MenuModal />}
    </>
  );
}

const mapStateToProps = (state: any) => ({
  menuIsOpen: state.menuReducers.isOpen,
});

export default connect(mapStateToProps, null)(Index);