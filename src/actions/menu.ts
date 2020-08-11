import { menuActions } from '../constants/actionTypes';

const actions = {
  toggleMenu: () => ({
    type: menuActions.TOGGLE_MENU,
  })
}

export { actions };