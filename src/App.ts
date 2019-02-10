import * as express from 'express';
import * as fg from 'fast-glob';

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()

    router.get('/', (req, res) => {
      function cb(){
        console.log('Processed in next iteration');
      }
      process.nextTick(cb);
      console.log('Processed in the first iteration');
      
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express
