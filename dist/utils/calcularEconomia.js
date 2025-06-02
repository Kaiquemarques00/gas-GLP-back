"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularEconomia = void 0;
const calcularEconomia = (consumoKg) => {
    const precoAtual = 8.5; // preço atual por kg
    const precoIdeal = 5.5; // preço ideal estimado por kg
    const economiaKg = precoAtual - precoIdeal;
    const economiaTotal = economiaKg * consumoKg;
    const economiaPercentual = ((economiaKg / precoAtual) * 100);
    return {
        economiaReais: Number(economiaTotal.toFixed(2)),
        economiaPorcentagem: Number(economiaPercentual.toFixed(2)),
    };
};
exports.calcularEconomia = calcularEconomia;
