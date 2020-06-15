import { processCsv , validateRequest, getAll } from './../services/index';
import { Request, Response } from 'express';

export class CsvFileController {

  constructor() {}

  public async processCsv(req: Request, res: Response): Promise<void> {
    const {
      file = { path: '' },
      body: { providerName = null }
    } = req;
    
    const { path: filePath = null } = file;
    console.log('file: ', file);

    const checkRequest = validateRequest(providerName, file);
    if (checkRequest.success) {
      const response = await processCsv(providerName, filePath);
      res.json(response);
    } else {
      res.json(checkRequest);
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    const response = await getAll();
    res.json(response);
  }

}