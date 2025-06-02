import { Request, Response } from 'express';
import { cotacaoService } from '../services/cotacao.service';

export const cotacaoController = {
  alter: async (req: Request, res: Response) => {
    const result = await cotacaoService.alter(req.body);
    res.status(201).json(result);
  },

  getCotacao: async (req: Request, res: Response) => {
    const result = await cotacaoService.getCotacao();
    res.status(200).json(result);
  }
};