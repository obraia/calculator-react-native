import styled from 'styled-components/native';
import { transparentize } from 'polished';

export const Container = styled.View`
  flex: 1;
  margin-bottom: auto;
`;

export const Expression = styled.Text`
  padding: 10px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.textBackground};
`;

export const Result = styled.Text<{ mode: string }>`
  width: 100%;
  margin-top: auto;
  padding: 10px;
  text-align: ${({ mode }) => (mode === 'default' ? 'right' : 'left')};
  font-size: 72px;
  color: ${({ mode, theme }) =>
    mode === 'default' ? theme.colors.textBackground : transparentize(0.75, theme.colors.textBackground)};
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
})``;
