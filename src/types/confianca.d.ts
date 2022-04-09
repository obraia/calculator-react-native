declare module '@obraia/intervalo-confianca' {
  import '@obraia/intervalo-confianca';

  export default function main(
    amostra_a: number[],
    amostra_b: number[],
    nivel_confianca: string
  ): {
    media_a: number;
    desvio_padrao_a: number;
    historico_desvio_padrao_a: string[];
    intervalo_confianca_a: number[];
    historico_intervalo_confianca_a: string[];
    media_b: number;
    desvio_padrao_b: number;
    historico_desvio_padrao_b: string[];
    intervalo_confianca_b: number[];
    historico_intervalo_confianca_b: string[];
    media_diferenca: number;
    desvio_padrao_diferenca: number;
    historico_desvio_padrao_diferenca: string[];
    intervalo_confianca_diferenca: number[];
    historico_intervalo_confianca_diferenca: string[];
  };
}
