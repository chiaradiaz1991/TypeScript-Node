

import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";
import mongoose from 'mongoose';



class App {
  public app: express.Application;
  public routePrev: Routes = new Routes(); //instances of Routes

  constructor() {
    this.app = express(); //local variable, express object
    this.config();
    this.routePrev.routes(this.app);
    this.mongoSetUp();
  }

  private config(): void {
    this.app.use(function(req,res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with");
      next();
    });

    this.app.use(bodyParser.json()); //support json type post data
    this.app.use(bodyParser.urlencoded({ extended: false})); //support urlencoded data
  }


  //initialize mongoose
  private mongoSetUp(): void {
    mongoose.connect('mongodb://localhost:27017/school', {})
    .then(()=> console.log('connection is success'))
    .catch((err)=> console.log(err));
  }
}

export default new App().app;