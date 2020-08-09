import React, { createContext, useContext, useState, useEffect } from 'react';
import { ButtonData, MathExpression } from '../interfaces';

export const ExpressionContext = createContext<MathExpression>({});

export default function ExpressionProvider({ children }: any) {

  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');

  const addValue = (value: ButtonData) => {

    if (value.type === 'number') {
      setExpression(expression + value.command);
    }
    else if (value.type === 'operator') {
      if ((String(expression).length > 0 || value.command === '-') && !lastIsOperator()) {
        setExpression(expression + value.command);
      }
    }
    else if (value.type === 'function') {
      if (value.command === 'del') deleteLastValue();
      else if (value.command === 'C') clearAll();
      else if (value.command === '=') solveExpression(false);
      else if (value.command === '.') addDot();
    }
  }

  const lastIsOperator = () => {
    const lastValue = expression[expression.length - 1];
    return (lastValue && isNaN(Number(lastValue)) && isNaN(Number(expression))  ||lastValue === '.');
  }

  const addDot = () => {
    const expressions = String(expression).split(/[^0-9\.]/g);
    if (!expressions[expressions.length - 1].includes('.')) {
      setExpression(expression + '.');
    }
  }

  const deleteLastValue = () => {
    setExpression(String(expression).slice(0, -1).trim());
  }

  const clearAll = () => {
    setExpression('');
    setResult('0');
  }

  const solveExpression = (autoSolve: Boolean) => {
    if (expression && !lastIsOperator()) {
      const result = eval(expression);
      setResult(result);
      if (!autoSolve && !isNaN(result)) setExpression(result);
    }
  };

  useEffect(() => { solveExpression(true); }, [expression]);

  return (
    <ExpressionContext.Provider value={{ expression, result, addValue, solveExpression }}>
      {children}
    </ExpressionContext.Provider>
  );
}

export function useMathContext() {
  const context = useContext(ExpressionContext);

  const {
    expression,
    result,
    addValue = () => console.log('Not implemented'),
    solveExpression = () => console.log('Not implemented')
  } = context;

  return { expression, result, addValue, solveExpression };
}