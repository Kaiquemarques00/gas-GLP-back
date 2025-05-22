// src/routes.ts
import { Router } from "express";
import { authController } from "./controllers/auth.controller";
import { simulationController } from "./controllers/simulation.controller";
import { leadController } from "./controllers/lead.controller";
import { authenticateToken } from "./middleware/auth.middleware";
import { companyController } from "./controllers/company.controller";
import { visitorController } from "./controllers/visitor.controller";

const router = Router();

// Auth routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Simulation routes
router.post("/simulations", simulationController.create);
router.get("/simulations/:id", simulationController.getById);
router.get("/simulations", authenticateToken, simulationController.getAll);

// Company routes
router.post("/companies", companyController.create);
router.get("/companies", authenticateToken, companyController.getAll);

// Visitors routes
router.post("/visitors", visitorController.create);
router.get("/visitors", authenticateToken, visitorController.getAll);

// Lead routes
router.get("/leads", authenticateToken, leadController.getAll);
router.patch("/leads/:id/status", authenticateToken, leadController.updateStatus);

export default router;
