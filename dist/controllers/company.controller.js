"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyController = void 0;
const company_service_1 = require("../services/company.service");
exports.companyController = {
    create: async (req, res) => {
        const result = await company_service_1.companyService.create(req.body);
        res.status(201).json(result);
    },
    getAll: async (_req, res) => {
        const result = await company_service_1.companyService.getAll();
        res.status(200).json(result);
    }
};
