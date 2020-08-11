import React from 'react';
import { connect } from 'react-redux';
import { useThemeContext } from '../../contexts/themeContex';
import { Creators as menuActions } from '../../store/ducks/menu';
import { Container, Title, Button } from './styles';

import MenuIcon from '../svg/menu';

const Header = (props: { toggleMenu?: () => void }) => {
  console.log('[Header] render');

  const { theme } = useThemeContext();

  return (
    <Container>
      <Title>Calculator</Title>
      <Button onPress={props.toggleMenu}><MenuIcon fill={theme?.colors.primary} /></Button>
    </Container>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleMenu: () => dispatch(menuActions.toggleMenu())
});

export default connect(null, mapDispatchToProps )(Header);