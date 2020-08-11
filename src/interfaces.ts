export interface ButtonProps {
  command: string;
  type: string;
  icon: any;
}

export interface MathExpression {
  expression?: string;
  result?: string;
  addValue?: (value: ButtonProps) => void;
  solveExpression?: (autoSolve: Boolean) => void;
}
