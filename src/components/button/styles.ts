import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.shapes.buttonRadius + 'px'};
  background-color: ${props => lighten(0.1, props.theme.colors.background)};
`;

export const Label = styled.Text`
  font-size: 28px;
  color:  ${props => props.theme.colors.textBackground};
`;
