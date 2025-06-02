import { prisma } from "../config/prisma";
import calcularEconomiaGLP from "../utils/calcularEconomia";

export const simulationService = {
  create: async (data: any) => {
    const simulation = await prisma.simulation.create({ data });

    return simulation;
  },

  getAll: async () => {
    return prisma.simulation.findMany();
  },

  getById: async (id: string) => {
    return prisma.simulation.findUnique({
      where: {
        id
      },
    })
  }
};
