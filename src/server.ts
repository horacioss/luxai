import express, { Application } from "express";
import cors from "cors";

class ServerApp {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(cors());
  }

  routes(): Application {
    this.app.get("/", (req, res) => {
      console.log(req.url);
      res.json({ msg: "Hello world" });
    });
    return this.app;
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server is started in localhost:${this.app.get("port")}`);
    });
  }
}

export default ServerApp;
