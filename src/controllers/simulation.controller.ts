import { Request, Response } from 'express';
import { simulationService } from '../services/simulation.service';

export const simulationController = {
  create: async (req: Request, res: Response) => {
    const result = await simulationService.create(req.body);
    res.status(201).json(result);
  },

  getAll: async (_req: Request, res: Response) => {
    const result = await simulationService.getAll();
    res.status(200).json(result);
  },

  getById: async (req: Request, res: Response) => {
    const result = await simulationService.getById(req.params.id);
    res.status(200).json(result);
  }
};