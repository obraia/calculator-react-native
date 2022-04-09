import React, { memo } from 'react';
import Screen from '../../components/screen';
import Keyboard from '../../components/keyboard';

import { Container } from './styles';

const Home = () => {
  // console.log('[Home] render');

  return (
    <Container>
      <Screen />
      <Keyboard />
    </Container>
  );
};

export default memo(Home);
