import { prisma } from '../config/prisma';

export const leadService = {
  updateStatus: async (id: string, { status, notes }: any) => {
    return prisma.lead.update({
      where: { id },
      data: { status, notes }
    });
  },

  getAll: async () => {
    return prisma.lead.findMany({
      include: { simulation: true }
    });
  }
};