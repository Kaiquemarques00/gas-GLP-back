import { prisma } from "../config/prisma";
import { calcularEconomia } from "../utils/calcularEconomia";

export const simulationService = {
  create: async (data: any) => {
    const simulation = await prisma.simulation.create({ data });

    const economia = calcularEconomia(data.consumptionKg);

    await prisma.saving.create({
      data: {
        simulationId: simulation.id,
        estimatedSaving: economia.economiaReais,
        savingPercentage: economia.economiaPorcentagem,
      },
    });

    await prisma.lead.create({
      data: {
        simulationId: simulation.id,
        status: "novo",
      },
    });

    return simulation;
  },

  getAll: async () => {
    return prisma.simulation.findMany({
      include: {
        saving: true,
        lead: true,
      },
    });
  },

  getById: async (id: string) => {
    return prisma.simulation.findUnique({
      where: {
        id
      },
      include: {
        saving: true,
        company: true,
        visitor: true
      }
    })
  }
};
