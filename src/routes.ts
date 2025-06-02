// src/routes.ts
import { Router } from "express";
import { authController } from "./controllers/auth.controller";
import { simulationController } from "./controllers/simulation.controller";
import { contractController } from "./controllers/contract.controller"; // 👈 importa o controller de contrato
import { authenticateToken } from "./middleware/auth.middleware";
import { queryController } from "./controllers/query.controller";
import { cotacaoController } from "./controllers/cotacao.controller";

const router = Router();

// Auth routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Simulation routes
router.post("/simulations", simulationController.create);
router.get("/simulations/:id", simulationController.getById);
router.get("/simulations", authenticateToken, simulationController.getAll);

//
router.post("/queries", queryController.create);
router.get("/queries/:userId", queryController.getById);

//
router.put("/cotacao", cotacaoController.alter);
router.get("/cotacao", cotacaoController.getCotacao);

// Contract routes
router.post("/contracts", contractController.create); // criar contrato
router.get("/contracts/:id", contractController.getByCompanyId); // buscar por id
router.get("/contracts", authenticateToken, contractController.getAll); // listar todos, autenticado
router.get("/contracts/:id/pdf", contractController.getPdf);

export default router;
