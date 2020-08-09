import React from 'react';
import { useMathContext } from '../../contexts/mathContext';
import Button from '../../components/button';

import { Container, Screen, Expression, Result, Grid, Item } from './styles';

import BackspaceIcon from '../../components/svg/backspace';

const buttons = [
  { command: 'C', type: 'function', icon: null },
  { command: '7', type: 'number', icon: null },
  { command: '4', type: 'number', icon: null },
  { command: '1', type: 'number', icon: null },
  { command: '%', type: 'operator', icon: null },
  { command: 'del', type: 'function', icon: BackspaceIcon },
  { command: '8', type: 'number', icon: null },
  { command: '5', type: 'number', icon: null },
  { command: '2', type: 'number', icon: null },
  { command: '0', type: 'number', icon: null },
  { command: '/', type: 'operator', icon: null },
  { command: '9', type: 'number', icon: null },
  { command: '6', type: 'number', icon: null },
  { command: '3', type: 'number', icon: null },
  { command: '.', type: 'function', icon: null },
  { command: '*', type: 'operator', icon: null },
  { command: '-', type: 'operator', icon: null },
  { command: '+', type: 'operator', icon: null },
  { command: '=', type: 'function', icon: null }
];

const Home = () => {

  const { expression, result } = useMathContext();

  const getFontSize = () => {
    const resultLength = String(result).length;
    return (resultLength > 6) ? 72 - resultLength * 2 : 72;
  }

  return (
    <Container>
      <Screen>
        <Expression>{expression}</Expression>
        <Result style={{ fontSize: getFontSize()}}>{result}</Result>
      </Screen>
      <Grid>
        {buttons.map((data, i) => (
          <Item key={data.command} style={{ height: (i === buttons.length - 1) ? '40%' : '20%' }}>
            <Button data={data} />
          </Item>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;