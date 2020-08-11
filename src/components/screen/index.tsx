import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Clipboard } from 'react-native';
import { Snackbar } from 'react-native-paper';

import { Container, Expression, Result } from './styles';

const Screen = ({ expression, result}) => {
  console.log('[Screen] render');

  const [snackbar, setSnackbar] = useState({ visible: false, text: '' });

  const getFontSize = () => {
    const resultLength = String(result).length;
    return (resultLength > 6) ? 72 - resultLength * 2 : 72;
  }

  const copyToClipboard = (text: string = '') => {
    Clipboard.setString(String(text));
    setSnackbar({ visible: true, text: 'Copied to Clipboard' });
  }

  return (
    <>
      <Container>
        <Expression onLongPress={() => copyToClipboard(expression)}>{expression}</Expression>
        <Result style={{ fontSize: getFontSize() }} onLongPress={() => copyToClipboard(result)}>{result}</Result>
      </Container>
      <Snackbar visible={snackbar.visible} duration={1000} onDismiss={() => setSnackbar({ visible: false, text: '' })}>
        {snackbar.text}
      </Snackbar>
    </>
  );
}

const mapStateToProps = state => ({
  expression: state.calcReducers.expression,
  result: state.calcReducers.result,
});

export default connect(mapStateToProps)(Screen);