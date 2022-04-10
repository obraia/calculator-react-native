import { createActions, createReducer } from 'reduxsauce';
import intervaloConfianca from '@obraia/intervalo-confianca';
import { CalcState, ButtonProps } from '../../interfaces';

const INITIAL_STATE: CalcState = {
  result: '0',
  expression: '',
  mode: 'default',
  intervaloConfianca: {
    result: '',
    amostraA: [],
    amostraB: [],
    nivelConfianca: '',
    step: 1,
  },
};

const inserValue = (state: CalcState = INITIAL_STATE, action: any) => {
  utils.addValue(state, action.value);
  return { ...state };
};

const customAction = (state: CalcState = INITIAL_STATE, action: any) => {
  utils.customAction(state, action.value);
  return { ...state };
};

// Making Types and Creators
export const { Types, Creators } = createActions({
  insertValue: ['value'],
  customAction: ['value'],
});

// Making reducer
export default createReducer(INITIAL_STATE, {
  [Types.INSERT_VALUE]: inserValue,
  [Types.CUSTOM_ACTION]: customAction,
});

const utils = {
  addValue: (state: CalcState, value: ButtonProps) => {
    if (state.mode === 'default') {
      if (value.type === 'number') {
        state.expression += value.command;
        utils.solveExpression(state, true);
      } else if (value.type === 'operator') {
        if ((String(state.expression).length > 0 || value.command === '-') && !utils.lastIsOperator(state.expression)) {
          state.expression += value.command;
        }
      } else if (value.type === 'function') {
        if (value.command === 'del') utils.deleteLastValue(state);
        else if (value.command === 'C') utils.clearAll(state);
        else if (value.command === '=') utils.solveExpression(state, false);
        else if (value.command === '.') utils.addDot(state);
      }
    } else if (state.mode === 'intervalo de confiança') {
      if (['number', 'separator', 'operator'].includes(value.type)) {
        state.expression += value.command;
      } else if (value.type === 'function') {
        if (value.command === 'del') utils.deleteLastValue(state);
        else if (value.command === 'C') utils.clearAll(state);
        else if (value.command === '=') utils.nextStep(state);
        else if (value.command === '.') utils.addDot(state);
      }
    }
  },
  solveExpression: (state: CalcState, autoSolve: Boolean) => {
    if (state.expression && !utils.lastIsOperator(state.expression)) {
      const result = eval(state.expression);
      const resultParts = String(result).split('.');

      if (resultParts[1]?.length > 8) state.result = parseFloat(result).toFixed(8);
      else state.result = result;

      if (!autoSolve && !isNaN(result)) {
        state.expression = result;
      }
    }
  },
  lastIsOperator: (expression: string) => {
    const lastValue = expression[expression.length - 1];
    return (lastValue && isNaN(Number(lastValue)) && isNaN(Number(expression))) || lastValue === '.';
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
    utils.solveExpression(state, true);
    if (newExpression === '') state.result = '0';

    if (state.mode === 'intervalo de confiança') {
      state.intervaloConfianca.step = state.expression.split('\n').length as 1 | 2 | 3;
    }
  },
  clearAll: (state: CalcState) => {
    if (state.mode === 'default') {
      state.result = '0';
      state.expression = '';
    } else if (state.mode === 'intervalo de confiança') {
      state.intervaloConfianca.result = '';
      state.intervaloConfianca.amostraA = [];
      state.intervaloConfianca.amostraB = [];
      state.intervaloConfianca.nivelConfianca = '';
      state.intervaloConfianca.step = 1;
    }
  },
  round: (num: number, places: number) => {
    if (!('' + num).includes('e')) {
      return +(Math.round(Number(num + 'e+' + places)) + 'e-' + places);
    } else {
      let arr = ('' + num).split('e');
      let sig = '';
      if (+arr[1] + places > 0) {
        sig = '+';
      }
      return +(Math.round(Number(+arr[0] + 'e' + sig + (+arr[1] + places))) + 'e-' + places);
    }
  },
  nextStep: (state: CalcState) => {
    if (state.intervaloConfianca.step < 3) {
      state.intervaloConfianca.step++;
      state.expression += '\n';
      return { ...state };
    }

    if (state.intervaloConfianca.step === 3) {
      const linhas = String(state.expression).split('\n');
      const amostra_a = linhas[0].split(',').map((i) => parseFloat(i));
      const amostra_b = linhas[1].split(',').map((i) => parseFloat(i));
      const nivel_confianca = linhas[2];

      const {
        media_a,
        desvio_padrao_a,
        historico_desvio_padrao_a,
        intervalo_confianca_a,
        historico_intervalo_confianca_a,

        media_b,
        desvio_padrao_b,
        historico_desvio_padrao_b,
        intervalo_confianca_b,
        historico_intervalo_confianca_b,

        media_diferenca,
        desvio_padrao_diferenca,
        historico_desvio_padrao_diferenca,
        intervalo_confianca_diferenca,
        historico_intervalo_confianca_diferenca,
      } = intervaloConfianca(amostra_a, amostra_b, nivel_confianca);

      state.intervaloConfianca.result =
        '--- AMOSTRA A --- \n\n' +
        `Média A: ${media_a} \n` +
        `Desvio padrão A: ${desvio_padrao_a} \n` +
        `Intervalo de confiança A: [${intervalo_confianca_a.join(', ')}] \n\n` +
        '--- AMOSTRA B --- \n\n' +
        `Média B: ${media_b} \n` +
        `Desvio padrão B: ${desvio_padrao_b} \n` +
        `Intervalo de confiança B: [${intervalo_confianca_b.join(', ')}] \n\n` +
        '--- DIFERENÇA --- \n\n' +
        `Média diferença: ${media_diferenca} \n` +
        `Desvio padrão diferença: ${desvio_padrao_diferenca} \n` +
        `Intervalo de confiança diferença: [${intervalo_confianca_diferenca.join(', ')}] \n\n` +
        '--- HISTÓRICO A --- \n\n' +
        `${historico_desvio_padrao_a.join('\n')} \n\n` +
        `${historico_intervalo_confianca_a.join('\n')} \n\n` +
        '--- HISTÓRICO B --- \n\n' +
        `${historico_desvio_padrao_b.join('\n')} \n\n` +
        `${historico_intervalo_confianca_b.join('\n')} \n\n` +
        '--- HISTÓRICO DIFERENÇA --- \n\n' +
        `${historico_desvio_padrao_diferenca.join('\n')} \n\n` +
        `${historico_intervalo_confianca_diferenca.join('\n')}`;
    }
  },
  customAction: (state: CalcState, value: ButtonProps) => {
    switch (value.command) {
      case 'C':
        state.mode = state.mode === 'default' ? 'intervalo de confiança' : 'default';
        break;
    }
  },
};
