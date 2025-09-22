import cors from "cors";
import { Express } from "express";
import { logger } from "./Logger";
import { CLIENT_URL } from "./DotEnvConfig";
export const CorsConfig = (app: Express) => {
  try {
    app.use(
      cors({
        origin: CLIENT_URL,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
      })
    );
  } catch (error) {
    console.error("CORS config failed: ", error);
    logger.error(`CORS config failed: ${error}`)
  }
};