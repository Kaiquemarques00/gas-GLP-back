"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitorService = void 0;
const prisma_1 = require("../config/prisma");
exports.visitorService = {
    create: async (data) => {
        return prisma_1.prisma.visitor.create({ data });
    },
    getAll: async () => {
        return prisma_1.prisma.visitor.findMany();
    }
};
