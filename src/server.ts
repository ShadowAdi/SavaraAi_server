import  "../src/configs/DotEnvConfig";
import express from "express";
import { CorsConfig } from "./configs/corsConfig";
import { AppConnect } from "./configs/AppConfigRunner";

const app = express();

CorsConfig(app);
app.use(express.json());




AppConnect(app);