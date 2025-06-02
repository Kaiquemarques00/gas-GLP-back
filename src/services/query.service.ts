import { prisma } from "../config/prisma";
import calcularEconomiaGLP from "../utils/calcularEconomia";

export const queryService = {
  create: async (data: any) => {
    const query = await prisma.query.create({ data });

    const economia = calcularEconomiaGLP(data.averageCost ,data.consumptionKg, data.pricePerKg);

    await prisma.saving.create({
      data: {
        queryId: query.id,
        fairValue: economia.valorJusto,
        estimatedSaving: economia.economiaReais,
        savingPercentage: economia.economiaPercentual,
      },
    });

    return query;
  },

  getById: async (userId: string) => {
    return prisma.query.findFirst({
        where: {
            userId
        },
        include: {
            saving: true,
        },
        orderBy: {
            
        }
    });
  },
};
