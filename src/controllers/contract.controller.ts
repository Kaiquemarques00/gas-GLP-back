import { Request, Response } from 'express';
import { contractService } from '../services/contract.service';
import fs from "fs";

export const contractController = {
  create: async (req: Request, res: Response) => {
    try {
      const result = await contractService.create(req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Erro ao criar contrato' });
    }
  },

  getAll: async (_req: Request, res: Response) => {
    const result = await contractService.getAll();
    res.status(200).json(result);
  },

  getByCompanyId: async (req: Request, res: Response) => {
    const result = await contractService.getByCompanyId(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: 'Contrato não encontrado' });
    }
  },

  getPdf: async (req: Request, res: Response) => {
    try {
      const contractId = req.params.id;
      const pdfPath = await contractService.getPdfPath(contractId);

      res.contentType("application/pdf");
      const stream = fs.createReadStream(pdfPath);
      stream.pipe(res);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  },
};
