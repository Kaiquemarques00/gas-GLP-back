"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitorController = void 0;
const visitor_service_1 = require("../services/visitor.service");
exports.visitorController = {
    create: async (req, res) => {
        const result = await visitor_service_1.visitorService.create(req.body);
        res.status(201).json(result);
    },
    getAll: async (_req, res) => {
        const result = await visitor_service_1.visitorService.getAll();
        res.status(200).json(result);
    }
};
