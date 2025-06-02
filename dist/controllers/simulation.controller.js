"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulationController = void 0;
const simulation_service_1 = require("../services/simulation.service");
exports.simulationController = {
    create: async (req, res) => {
        const result = await simulation_service_1.simulationService.create(req.body);
        res.status(201).json(result);
    },
    getAll: async (_req, res) => {
        const result = await simulation_service_1.simulationService.getAll();
        res.status(200).json(result);
    },
    getById: async (req, res) => {
        const result = await simulation_service_1.simulationService.getById(req.params.id);
        res.status(200).json(result);
    }
};
