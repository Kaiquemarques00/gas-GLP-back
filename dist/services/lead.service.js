"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadService = void 0;
const prisma_1 = require("../config/prisma");
exports.leadService = {
    updateStatus: async (id, { status, notes }) => {
        return prisma_1.prisma.lead.update({
            where: { id },
            data: { status, notes }
        });
    },
    getAll: async () => {
        return prisma_1.prisma.lead.findMany({
            include: { simulation: true }
        });
    }
};
