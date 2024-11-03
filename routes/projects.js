import express from "express";
import {
  getProjects,
  getCurrentProjects,
} from "../controllers/projectsController.js";

const router = express.Router();
router.get("/all", getProjects);
router.get("/current", getCurrentProjects);

export default router;
