import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as menuActions } from '../../store/ducks/menu';
import { Reducers } from '../../interfaces';

import { Container, Title, Button } from './styles';
import MenuIcon from '../svg/menu';

const Header = () => {
  // console.log('[Header] render');

  const { theme } = useSelector((state: Reducers) => state.themeReducers);
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Calculator</Title>
      <Button onPress={() => dispatch(menuActions.toggleMenu())}>
        <MenuIcon fill={theme.colors.primary} />
      </Button>
    </Container>
  );
}

export default Header;