import React from 'react';
import MathProvider from './src/contexts/mathContext';
import ThemeProvider from './src/contexts/themeContex';
import ModalProvider from './src/contexts/modalContext';
import Index from './src';

export default function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <MathProvider>
          <Index />
        </MathProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}
