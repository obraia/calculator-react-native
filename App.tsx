import React from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from './src/contexts/themeContex';
import Index from './src';

import { store } from './src/store';

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Index />
      </Provider>
    </ThemeProvider>
  );
}
