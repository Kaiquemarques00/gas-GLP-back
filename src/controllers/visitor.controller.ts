import { Request, Response } from 'express';
import { visitorService } from '../services/visitor.service';

export const visitorController = {
  create: async (req: Request, res: Response) => {
    const result = await visitorService.create(req.body);
    res.status(201).json(result);
  },

  getAll: async (_req: Request, res: Response) => {
    const result = await visitorService.getAll();
    res.status(200).json(result);
  }
};