"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulationService = void 0;
const prisma_1 = require("../config/prisma");
const calcularEconomia_1 = require("../utils/calcularEconomia");
exports.simulationService = {
    create: async (data) => {
        const simulation = await prisma_1.prisma.simulation.create({ data });
        const economia = (0, calcularEconomia_1.calcularEconomia)(data.consumptionKg);
        await prisma_1.prisma.saving.create({
            data: {
                simulationId: simulation.id,
                estimatedSaving: economia.economiaReais,
                savingPercentage: economia.economiaPorcentagem,
            },
        });
        await prisma_1.prisma.lead.create({
            data: {
                simulationId: simulation.id,
                status: "novo",
            },
        });
        return simulation;
    },
    getAll: async () => {
        return prisma_1.prisma.simulation.findMany({
            include: {
                saving: true,
                lead: true,
            },
        });
    },
    getById: async (id) => {
        return prisma_1.prisma.simulation.findUnique({
            where: {
                id
            },
            include: {
                saving: true,
                company: true,
                visitor: true
            }
        });
    }
};
