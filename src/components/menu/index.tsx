import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Slider, Linking } from 'react-native'
import { Switch } from 'react-native-paper';
import { Reducers } from '../../interfaces';
import { Creators as menuActions } from '../../store/ducks/menu';
import { Creators as themeActions } from '../../store/ducks/theme';
import GithubIcon from '../../components/svg/github';
import ColorButton from '../colorButton';

import {
  Container,
  Modal,
  Header,
  Title,
  CloseButton,
  Body,
  Item,
  ItemTitle,
  Footer,
  FooterText,
  OutsideArea
} from './styles';

const Menu = () => {
  // console.log('[Menu] render');

  const { theme } = useSelector((state: Reducers) => state.themeReducers);
  const dispatch = useDispatch();

  const goToGitHubProfile = () => {
    Linking.openURL('https://github.com/obraia/calculator-react-native');
  }

  return (
    <>
      <OutsideArea onTouchStart={() => dispatch(menuActions.toggleMenu())} />
      <Container>
        <Modal>
          <Header>
            <Title>Configurations</Title>
            <CloseButton onPress={() => dispatch(menuActions.toggleMenu())} />
          </Header>
          <Body>
            <Item>
              <ItemTitle>Dark mode</ItemTitle>
              <Switch value={theme.title === 'dark'}
                onValueChange={() => dispatch(themeActions.toggleTheme())}
                color={theme.colors.primary} />
            </Item>

            <Item>
              <ItemTitle>Buttons round</ItemTitle>
              <Slider
                style={{ width: '50%' }}
                step={5}
                value={Number(theme.shapes.buttonRadius)}
                onSlidingComplete={value => dispatch(themeActions.setRadius(value))}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor={theme.colors.primary}
                minimumTrackTintColor={theme.colors.primary} />
            </Item>

            <Item>
              <ItemTitle>Primary color</ItemTitle>
            </Item>

            <Item>
              <ColorButton color={theme.colors.color1} />
              <ColorButton color={theme.colors.color2} />
              <ColorButton color={theme.colors.color3} />
              <ColorButton color={theme.colors.color4} />
              <ColorButton color={theme.colors.color5} />
              <ColorButton color={theme.colors.color6} />
            </Item>

          </Body>
          <Footer onPress={goToGitHubProfile}>
            <FooterText>Github app repository</FooterText>
            <GithubIcon fill={theme.colors.primary} />
          </Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Menu;