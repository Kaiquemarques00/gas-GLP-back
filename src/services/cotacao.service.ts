import { prisma } from "../config/prisma";

export const cotacaoService = {
  alter: async (data: any) => {

    const cotacaoExistente = await prisma.cotacao.findFirst();

    if (!cotacaoExistente) {
      const novaCotacao = await prisma.cotacao.create({
        data: {
          valuePerKg: data.valorPorKg,
        },
      });
      return novaCotacao;
    }

    const cotacaoAtualizada = await prisma.cotacao.update({
      where: { id: cotacaoExistente.id },
      data: {
        valuePerKg: data.valorPorKg,
      },
    });

    return cotacaoAtualizada;
  },

  getCotacao: async () => {
    const cotacao = await prisma.cotacao.findFirst();

    return cotacao;
  }
};
