import { Request, Response } from 'express';
import { leadService } from '../services/lead.service';

export const leadController = {
  updateStatus: async (req: Request, res: Response) => {
    const result = await leadService.updateStatus(req.params.id, req.body);
    res.status(200).json(result);
  },

  getAll: async (_req: Request, res: Response) => {
    const result = await leadService.getAll();
    res.status(200).json(result);
  }
};