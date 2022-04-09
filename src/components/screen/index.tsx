import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Snackbar } from 'react-native-paper';
import { Clipboard } from 'react-native';
import { Reducers } from '../../interfaces';
import { Container, Expression, Result, Scroll } from './styles';

const Screen = () => {
  // console.log('[Screen] render');

  const { expression, result, intervaloConfianca, mode } = useSelector((state: Reducers) => state.calcReducers);

  const [snackbar, setSnackbar] = useState({ visible: false, text: '' });

  const getResult = () => {
    return mode === 'default' ? result : intervaloConfianca.result;
  };

  const getFontSize = () => {
    const resultLength = String(getResult()).length;
    return resultLength > 6 ? 72 - resultLength * 2 : 72;
  };

  const copyToClipboard = (text: string = '') => {
    Clipboard.setString(String(text));
    setSnackbar({ visible: true, text: 'Copied to Clipboard' });
  };

  return (
    <>
      <Container>
        <Expression onLongPress={() => copyToClipboard(expression)}>{expression}</Expression>

        <Scroll>
          <Result mode={mode} style={{ fontSize: getFontSize() }} onLongPress={() => copyToClipboard(result)}>
            {getResult()}
          </Result>
        </Scroll>
      </Container>

      <Snackbar visible={snackbar.visible} duration={1000} onDismiss={() => setSnackbar({ visible: false, text: '' })}>
        {snackbar.text}
      </Snackbar>
    </>
  );
};

export default Screen;
