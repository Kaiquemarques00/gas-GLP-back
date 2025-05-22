import { prisma } from '../config/prisma';

export const companyService = {
  create: async (data: any) => {
    return prisma.company.create({ data });
  },

  getAll: async () => {
    return prisma.company.findMany();
  }
};