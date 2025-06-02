type EconomiaResult = {
  valorJusto?: any;
  economiaReais?: any;
  economiaPercentual?: any;
  feedback?: string;
};

export default function calcularEconomiaGLP(
  valorConta: number,
  consumoKg: number,
  precoPorKg: number
): EconomiaResult {
  const precoDistribuicaoJusto = 34.74 / 13;

  if (precoPorKg <= precoDistribuicaoJusto) return {feedback: "Sua conta está dentro da conformidade"}

  const valorJusto = parseFloat((consumoKg * precoDistribuicaoJusto).toFixed(2));
  const economiaReais = parseFloat((valorConta - valorJusto).toFixed(2));
  const economiaPercentual = parseFloat(((economiaReais / valorConta) * 100).toFixed(2));

  return {
    valorJusto,
    economiaReais,
    economiaPercentual,
  };
}