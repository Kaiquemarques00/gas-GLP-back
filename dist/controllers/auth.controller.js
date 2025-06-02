"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
exports.authController = {
    register: async (req, res) => {
        const result = await auth_service_1.authService.register(req.body);
        res.status(201).json(result);
    },
    login: async (req, res) => {
        const result = await auth_service_1.authService.login(req.body);
        res.status(200).json(result);
    }
};
