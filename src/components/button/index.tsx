import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonProps, Reducers } from '../../interfaces';
import { Creators as calcActions } from '../../store/ducks/calc';

import { Container, Label } from './styles';

const Button = (props: { data: ButtonProps }) => {
  // console.log('[Button] render');

  const { theme } = useSelector((state: Reducers) => state.themeReducers);
  const dispatch = useDispatch();

  const getButtonTextcolor = () => {
    return props.data.type === 'function' || props.data.type === 'operator'
      ? theme.colors.primary
      : theme.colors.textBackground;
  };

  return (
    <Container
      onPress={() => dispatch(calcActions.insertValue(props.data))}
      onLongPress={() => dispatch(calcActions.customAction(props.data))}
    >
      {props.data.icon ? (
        <props.data.icon fill={theme?.colors.primary} />
      ) : (
        <Label style={{ color: getButtonTextcolor() }}>{props.data.command}</Label>
      )}
    </Container>
  );
};

export default Button;
