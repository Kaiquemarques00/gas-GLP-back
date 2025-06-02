"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyService = void 0;
const prisma_1 = require("../config/prisma");
exports.companyService = {
    create: async (data) => {
        return prisma_1.prisma.company.create({ data });
    },
    getAll: async () => {
        return prisma_1.prisma.company.findMany();
    }
};
