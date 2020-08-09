import styled from 'styled-components/native';
import { lighten } from 'polished';
import { BlurView } from 'expo-blur';

export const Container = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px;
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.textBackground};
`;

export const Button = styled.TouchableOpacity`
  width: 30px;
  height: 40px;
  border-radius: 7.5px;
  background-color: transparent;
`;
