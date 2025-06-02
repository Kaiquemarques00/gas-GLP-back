"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leadController = void 0;
const lead_service_1 = require("../services/lead.service");
exports.leadController = {
    updateStatus: async (req, res) => {
        const result = await lead_service_1.leadService.updateStatus(req.params.id, req.body);
        res.status(200).json(result);
    },
    getAll: async (_req, res) => {
        const result = await lead_service_1.leadService.getAll();
        res.status(200).json(result);
    }
};
