import { Request, Response } from 'express';
import { authService } from '../services/auth.service';

export const authController = {
  register: async (req: Request, res: Response) => {
    const result = await authService.register(req.body);
    res.status(201).json(result);
  },

  login: async (req: Request, res: Response) => {
    const result = await authService.login(req.body);
    res.status(200).json(result);
  }
};