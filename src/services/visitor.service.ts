import { prisma } from '../config/prisma';

export const visitorService = {
  create: async (data: any) => {
    return prisma.visitor.create({ data });
  },

  getAll: async () => {
    return prisma.visitor.findMany();
  }
};