import cors from "cors";
import express from "express";

const setupMiddlewares = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

export default setupMiddlewares;
