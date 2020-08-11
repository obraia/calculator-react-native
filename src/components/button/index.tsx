import React from 'react';
import { connect } from 'react-redux';
import { ButtonProps } from '../../interfaces';
import { useThemeContext } from '../../contexts/themeContex';

import { Creators as calcActions } from '../../store/ducks/calc';

import { Container, Label } from './styles';

const Button = (props: { data: ButtonProps, insertValue: (value: ButtonProps) => void }) => {
  console.log('[Button] render');

  const { theme } = useThemeContext();

  const getButtonTextcolor = () => {
    return props.data.type === 'function' || props.data.type === 'operator' ? theme?.colors.primary : theme?.colors.textBackground;
  }

  return (
    <Container onPressIn={() => props.insertValue(props.data)}>
      {props.data.icon ? <props.data.icon fill={theme?.colors.primary} /> :
        <Label style={{ color: getButtonTextcolor() }}>{props.data.command}</Label>}
    </Container>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  insertValue: (value: ButtonProps) => dispatch(calcActions.insertValue(value))
});

export default connect(null, mapDispatchToProps)(Button);