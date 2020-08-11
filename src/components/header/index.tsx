import React, { useMemo } from 'react';
import { useModalContext } from '../../contexts/modalContext';
import { useThemeContext } from '../../contexts/themeContex';
import { Container, Title, Button } from './styles';

import MenuIcon from '../svg/menu';

const Header = () => {
  console.log('[Header] render');

  const { toggleMenu } = useModalContext();
  const { theme } = useThemeContext();

  return (
    <Container>
      <Title>Calculator</Title>
      <Button onPress={toggleMenu}><MenuIcon fill={theme?.colors.primary} /></Button>
    </Container>
  );
}

export default Header;