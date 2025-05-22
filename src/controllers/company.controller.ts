import { Request, Response } from 'express';
import { companyService } from '../services/company.service';

export const companyController = {
  create: async (req: Request, res: Response) => {
    const result = await companyService.create(req.body);
    res.status(201).json(result);
  },

  getAll: async (_req: Request, res: Response) => {
    const result = await companyService.getAll();
    res.status(200).json(result);
  }
};