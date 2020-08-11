import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = (Dimensions.get('window'));

export const Container = styled.View`
  flex: 1;
  margin-bottom: auto;
`;

export const Expression = styled.Text`
  padding: 5px 10px;
  font-size: 18px;
  color: ${props => props.theme.colors.textBackground};
`;

export const Result = styled.Text`
  padding: 0 10px;
  margin-top: auto;
  margin-left: auto;
  font-size: 72px;
  color: ${props => props.theme.colors.textBackground};
`;
