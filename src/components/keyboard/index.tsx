import React, { useMemo } from 'react';
import { useThemeContext } from '../../contexts/themeContex';
import Button from '../../components/button';

import { Grid, Item } from './styles';

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
  console.log('[Keyboard] render')

  return (<Grid>
    {buttons.map((data, i) => (
      <Item key={data.command} style={{ height: (i === buttons.length - 1) ? '40%' : '20%' }}>
        <Button data={data} />
      </Item>
    ))}
  </Grid>);
}

export default Home;