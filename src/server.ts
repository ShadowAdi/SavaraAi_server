import  "../src/configs/DotEnvConfig";
import express from "express";
import { CorsConfig } from "./configs/corsConfig";
import { AppConnect } from "./configs/AppConfigRunner";
import { CustomErrorHandler } from "./middlewares/CustomErrorHandler";

const app = express();

CorsConfig(app);
app.use(express.json());


app.use(CustomErrorHandler);


AppConnect(app);