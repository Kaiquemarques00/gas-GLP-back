"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes.ts
const express_1 = require("express");
const auth_controller_1 = require("./controllers/auth.controller");
const simulation_controller_1 = require("./controllers/simulation.controller");
const lead_controller_1 = require("./controllers/lead.controller");
const auth_middleware_1 = require("./middleware/auth.middleware");
const company_controller_1 = require("./controllers/company.controller");
const visitor_controller_1 = require("./controllers/visitor.controller");
const router = (0, express_1.Router)();
// Auth routes
router.post("/register", auth_middleware_1.authenticateToken, auth_controller_1.authController.register);
router.post("/login", auth_controller_1.authController.login);
// Simulation routes
router.post("/simulations", simulation_controller_1.simulationController.create);
router.get("/simulations/:id", simulation_controller_1.simulationController.getById);
router.get("/simulations", auth_middleware_1.authenticateToken, simulation_controller_1.simulationController.getAll);
// Company routes
router.post("/companies", company_controller_1.companyController.create);
router.get("/companies", auth_middleware_1.authenticateToken, company_controller_1.companyController.getAll);
// Visitors routes
router.post("/visitors", visitor_controller_1.visitorController.create);
router.get("/visitors", auth_middleware_1.authenticateToken, visitor_controller_1.visitorController.getAll);
// Lead routes
router.get("/leads", auth_middleware_1.authenticateToken, lead_controller_1.leadController.getAll);
router.patch("/leads/:id/status", auth_middleware_1.authenticateToken, lead_controller_1.leadController.updateStatus);
exports.default = router;
