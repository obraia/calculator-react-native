import React from 'react';
import { Slider, Linking } from 'react-native'
import { Switch } from 'react-native-paper';

import { useModalContext } from '../../contexts/modalContext'
import { useThemeContext } from '../../contexts/themeContex';

import ColorButton from '../colorButton';

import GithubIcon from '../../components/svg/github';

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

const Home = () => {

  const { toggleMenu } = useModalContext();
  const { theme, toggleTheme, setButtonsRadius } = useThemeContext();

  const goToGitHubProfile = () => {
    Linking.openURL('https://github.com/obraia/calculator-react-native');
  }

  return (
    <>
      <OutsideArea onTouchStart={toggleMenu} />
      <Container>
        <Modal>
          <Header>
            <Title>Configurations</Title>
            <CloseButton onPress={toggleMenu} />
          </Header>
          <Body>
            <Item>
              <ItemTitle>Dark mode</ItemTitle>
              <Switch value={theme?.title === 'dark'} onValueChange={toggleTheme} color={theme?.colors.primary} />
            </Item>

            <Item>
              <ItemTitle>Buttons radius range</ItemTitle>
              <Slider
                style={{ width: 60, marginEnd: 5, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                value={Number(theme?.shapes.buttonRadius)}
                onSlidingComplete={value => setButtonsRadius(value)}
                minimumValue={0}
                maximumValue={50}
                thumbTintColor={theme?.colors.primary}
                minimumTrackTintColor={theme?.colors.primary} />
            </Item>

            <Item>
              <ItemTitle>Primary color</ItemTitle>
            </Item>

            <Item>
              <ColorButton color={theme?.colors.color1} />
              <ColorButton color={theme?.colors.color2} />
              <ColorButton color={theme?.colors.color3} />
              <ColorButton color={theme?.colors.color4} />
              <ColorButton color={theme?.colors.color5} />
              <ColorButton color={theme?.colors.color6} />
            </Item>

          </Body>
          <Footer onPress={goToGitHubProfile}>
            <FooterText>Github app repository</FooterText>
            <GithubIcon fill={theme?.colors.primary} />
          </Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Home;