import * as express from 'express';
import {Express, Router, Request, Response} from 'express';
import * as http from 'http';
import { IResponse } from './app/models/domain/message.model';
const app : Express =  express();

const router: Router = express.Router();

router.get('/', function(req, res) {
  const message: IResponse = {
    message: 'Holly Molly putitos! :)'
  }
  res.json(message)
})

app.use('/api', router);

const httpServer = http.createServer(app);
const port = 8080;

httpServer.listen(port, (err) => {
  if(err) {
    console.log(err);
  }
})