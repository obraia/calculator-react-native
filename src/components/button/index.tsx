import React, { useMemo } from 'react';
import { ButtonData } from '../../interfaces';
import { useThemeContext } from '../../contexts/themeContex';
import { useMathContext } from '../../contexts/mathContext';
import { Container, Label } from './styles';

const Button = (props: { data: ButtonData }) => {
  console.log('[Button] render');

  const { addValue } = useMathContext();
  const { theme } = useThemeContext();

  const getButtonTextcolor = () => {
    return props.data.type === 'function' || props.data.type === 'operator' ? theme?.colors.primary : theme?.colors.textBackground;
  }

  return (
    <Container onPressIn={() => addValue(props.data)}>
      {props.data.icon ? <props.data.icon fill={theme?.colors.primary} /> :
        <Label style={{ color: getButtonTextcolor() }}>{props.data.command}</Label>}
    </Container>
  );
}

export default Button;