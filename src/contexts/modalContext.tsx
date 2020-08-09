import React, { createContext, useContext, useState } from 'react';

interface ModalContex {
  menuIsOpen?: boolean;
  toggleMenu?: () => void;
}

const ModalContext = createContext<ModalContex>({});

export default function ModalProvider({ children }: any) {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => { setMenuIsOpen(!menuIsOpen); };

  return (
    <ModalContext.Provider value={{ toggleMenu, menuIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  const { 
    toggleMenu = () => { console.log('Not implemented') },
    menuIsOpen 
  } = context;
  return { toggleMenu, menuIsOpen };
}