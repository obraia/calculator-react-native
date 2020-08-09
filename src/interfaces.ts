export interface ButtonData {
  command: string;
  type: string;
  icon: any;
}

export interface MathExpression {
  expression?: string;
  result?: string;
  addValue?: (value: ButtonData) => void;
  solveExpression?: (autoSolve: Boolean) => void;
}
