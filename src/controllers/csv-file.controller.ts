import { processCsv } from './../services/index';
import { Request, Response } from 'express';

export class CsvFileController {

  constructor() {}

  public async processCsv(req: Request, res: Response): Promise<void> {
    console.log('file: ', req['file']);
    console.log('body: ', req.body);
    const response = await processCsv('jose', req['file'].path);
    res.json(response);
  }

}