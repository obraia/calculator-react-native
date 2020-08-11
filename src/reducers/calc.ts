import { ButtonProps } from '../interfaces';

interface CalcState {
  result: string;
  expression: string;
}

const INITIAL_STATE: CalcState = {
  result: '0',
  expression: ''
}

const lastIsOperator = (expression: string) => {
  const lastValue = expression[expression.length - 1];
  return (lastValue && isNaN(Number(lastValue)) && isNaN(Number(expression)) || lastValue === '.');
}

const addDot = (state: CalcState) => {
  const expressions = String(state.expression).split(/[^0-9\.]/g);
  if (!expressions[expressions.length - 1].includes('.')) {
    state.expression += '.';
  }
}

const clearAll = (state: CalcState) => {
  state.result = '0';
  state.expression = '';
}

const deleteLastValue = (state: CalcState) => {
  const newExpression = String(state.expression).slice(0, -1).trim();
  state.expression = newExpression;
  if (newExpression === '') state.result = '0';
}

const solveExpression = (state: CalcState, autoSolve: Boolean) => {
  if (state.expression && !lastIsOperator(state.expression)) {
    const result = eval(state.expression);
    state.result = result;
    if (!autoSolve && !isNaN(result)) {
      state.expression = result;
    };
  }
};

const addValue = (state: CalcState, value: ButtonProps) => {
  if (value.type === 'number') {
    state.expression += value.command;
    solveExpression(state, true);
  }
  else if (value.type === 'operator') {
    if ((String(state.expression).length > 0 || value.command === '-') && !lastIsOperator(state.expression)) {
      state.expression += value.command;
    }
  }
  else if (value.type === 'function') {
    if (value.command === 'del') deleteLastValue(state);
    else if (value.command === 'C') clearAll(state);
    else if (value.command === '=') solveExpression(state, false);
    else if (value.command === '.') addDot(state);
  }
}

const reducers = (state: CalcState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'MATH_INSERT_VALUE':
      addValue(state, action.payload.value);
      return { ...state };
    default:
      return state;
  }
}

export { reducers };

