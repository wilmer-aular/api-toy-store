import bodyParser from "body-parser";
import { Express } from "express";
import morgan from "morgan";
//import exphbs from "express-handlebars";
import apiRouter from "./routers/index."
import mongoConnect from "./enviroment/mongo.connect.ts";
export class Server {
  app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use("/api", apiRouter)
    mongoConnect();
  }

  start(port: number): void {
    this.app.listen(port, () => {
      console.info(`Server running on port ${port}`);
    });
  }
}
