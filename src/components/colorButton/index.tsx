import React from 'react';
import { useDispatch } from 'react-redux';
import { Creators as themeActions } from '../../store/ducks/theme';
import { Container } from './styles';

const ColorButton = (props: { color: string }) => {

  const dispatch = useDispatch();

  return (
    <Container style={{ aspectRatio: 1, backgroundColor: props.color }}
      onPress={() => dispatch(themeActions.setPrimaryColor(props.color))} />
  );
}

export default ColorButton;