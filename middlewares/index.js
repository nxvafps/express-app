import cors from "cors";
import express from "express";
import helmet from "helmet";

const setupMiddlewares = (app) => {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

export default setupMiddlewares;
