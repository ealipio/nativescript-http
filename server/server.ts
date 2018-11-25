import * as express from 'express';
import {Express, Router, Request, Response} from 'express';
import * as http from 'http';
const app : Express =  express();

const router: Router = express.Router();

router.get('/', function(req, res) {
  res.json({message: 'Holly Molly putitos!'})
})

app.use('/api', router);

const httpServer = http.createServer(app);
const port = 8080;

httpServer.listen(port, (err) => {
  if(err) {
    console.log(err);
  }
})