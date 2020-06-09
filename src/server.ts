import express from 'express';
import { CsvFileRoute } from './routes/index';
import { Mongoose } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.initMongo();
  }

  public config(): void {
    this.app.set('port', process.env.PORT || 2021);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      next();
    });
  }

  public routes(): void {
    this.app.use('/api/csv', new CsvFileRoute().router);
  }

  public initMongo(): void {
    const mongoMs = new MongoMemoryServer();
    const mongoose: Mongoose = new Mongoose();
    mongoose.Promise = Promise;
    mongoMs.getUri().then(uri => {
      const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
      };

      mongoose.connect(uri, options);

      mongoose.connection.on('error', err => {
        console.log('error: ', err);
      });

      mongoose.connection.once('open', () => {
        console.log('mongo memory server connection established...');
      });

    });
  }

  public start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`autofi-backend-challenge is running at http://localhost:${this.app.get('port')}`);
    });
  }
}

const server = new Server();
server.start();
