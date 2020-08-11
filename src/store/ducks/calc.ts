import { createActions, createReducer } from 'reduxsauce';
import { CalcState, ButtonProps } from "../../interfaces";

const INITIAL_STATE: CalcState = {
  result: '0',
  expression: ''
}

const inserValue = (state: CalcState = INITIAL_STATE, action: any) => {
  utils.addValue(state, action.value);
  return { ...state };
}

// Making Types and Creators
export const { Types, Creators } = createActions({
  insertValue: ['value']
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.INSERT_VALUE]: inserValue
});

const utils = {
  addValue: (state: CalcState, value: ButtonProps) => {
    if (value.type === 'number') {
      state.expression += value.command;
      utils.solveExpression(state, true);
    }
    else if (value.type === 'operator') {
      if ((String(state.expression).length > 0 || value.command === '-') && !utils.lastIsOperator(state.expression)) {
        state.expression += value.command;
      }
    }
    else if (value.type === 'function') {
      if (value.command === 'del') utils.deleteLastValue(state);
      else if (value.command === 'C') utils.clearAll(state);
      else if (value.command === '=') utils.solveExpression(state, false);
      else if (value.command === '.') utils.addDot(state);
    }
  },
  solveExpression: (state: CalcState, autoSolve: Boolean) => {
    if (state.expression && !utils.lastIsOperator(state.expression)) {
      const result = eval(state.expression);
      state.result = result;
      if (!autoSolve && !isNaN(result)) {
        state.expression = result;
      };
    }
  },
  lastIsOperator: (expression: string) => {
    const lastValue = expression[expression.length - 1];
    return (lastValue && isNaN(Number(lastValue)) && isNaN(Number(expression)) || lastValue === '.');
  },
  addDot: (state: CalcState) => {
    const expressions = String(state.expression).split(/[^0-9\.]/g);
    if (!expressions[expressions.length - 1].includes('.')) {
      state.expression += '.';
    }
  },
  deleteLastValue: (state: CalcState) => {
    const newExpression = String(state.expression).slice(0, -1).trim();
    state.expression = newExpression;
    if (newExpression === '') state.result = '0';
  },
  clearAll: (state: CalcState) => {
    state.result = '0';
    state.expression = '';
  }
}
