import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { ButtonProps } from '../../interfaces';
import { useThemeContext } from '../../contexts/themeContex';

import { actions } from '../../actions/calc';

import { Container, Label } from './styles';

const Button = (props: { data: ButtonProps, insertValue }) => {
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

const mapDispatchToProps = dispatch => ({
  insertValue: (value: ButtonProps) => dispatch(actions.insertValue(value))
});

export default connect(null, mapDispatchToProps)(Button);