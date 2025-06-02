import { Request, Response } from 'express';
import { queryService } from '../services/query.service';

export const queryController = {
  create: async (req: Request, res: Response) => {
    const result = await queryService.create(req.body);
    res.status(201).json(result);
  },

  getById: async (req: Request, res: Response) => {
    const result = await queryService.getById(req.params.userId);
    res.status(200).json(result);
  },
};