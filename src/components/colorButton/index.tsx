import React from 'react';
import { useThemeContext } from '../../contexts/themeContex';
import { useMathContext } from '../../contexts/mathContext';
import { Container } from './styles';

const ColorButton = (props: { color?: string }) => {

  const { setPrimaryColor } = useThemeContext();

  return (
    <Container style={{ aspectRatio: 1, backgroundColor: props.color }}
      onPress={() => setPrimaryColor(props.color || 'red')} />
  );
}

export default ColorButton;