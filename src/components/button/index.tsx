import React from 'react';
import { ButtonData } from '../../interfaces';
import { useThemeContext } from '../../contexts/themeContex';
import { useMathContext } from '../../contexts/mathContext';
import { Button, Label } from './styles';

const Home = (props: { data: ButtonData }) => {

  const { addValue } = useMathContext();
  const { theme } = useThemeContext();

  const getButtonTextcolor = () => {
    return props.data.type === 'function' || props.data.type === 'operator' ? theme?.colors.primary : theme?.colors.textBackground;
  }

  return (
    <Button onPressIn={() => addValue(props.data)}>
      {props.data.icon ? <props.data.icon fill={theme?.colors.primary} /> :
        <Label style={{ color: getButtonTextcolor() }}>{props.data.command}</Label>}
    </Button>
  );
}

export default Home;