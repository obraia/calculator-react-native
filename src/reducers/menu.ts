import { menuActions } from '../constants/actionTypes';

interface ModalState {
  isOpen: Boolean;
}

const INITIAL_STATE: ModalState = {
  isOpen: false
}

const toogleMenu = (state: ModalState) => {
  state.isOpen = !state.isOpen;
}

const reducers = (state: ModalState = INITIAL_STATE, action) => {
  switch (action.type) {
    case menuActions.TOGGLE_MENU:
      toogleMenu(state);
      return { ...state };
    default:
      return state;
  }
}

export { reducers };