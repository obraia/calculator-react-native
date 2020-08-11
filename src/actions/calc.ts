import { calcActions } from '../constants/actionTypes';
import { ButtonProps } from '../interfaces';

const actions = {
  insertValue: (value: ButtonProps) => ({
    type: calcActions.MATH_INSERT_VALUE,
    payload: {
      value
    }
  })
}

export { actions };