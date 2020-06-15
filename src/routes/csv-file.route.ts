import { Router } from 'express';
import { CsvFileController } from '../controllers/index';
import multer from 'multer';

export class CsvFileRoute {

  public router: Router;
  private csvFileController: CsvFileController = new CsvFileController();
  public upload: any;

  constructor() {
    this.router = Router();
    this.initMulter();
    this.routes();
  }

  initMulter(): void {
    this.upload = multer({ dest: './../uploads '});
  }

  routes(): void {
    this.router.post('/process-csv', [this.upload.single('file')], this.csvFileController.processCsv);
    this.router.get('', [], this.csvFileController.getAll);
  }
}