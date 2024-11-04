import express from "express";
import {
  getProjects,
  getCurrentProjects,
  getPlannedProjects,
} from "../controllers/projectsController.js";

const router = express.Router();
router.get("/all", getProjects);
router.get("/current", getCurrentProjects);
router.get("/planned", getPlannedProjects);

export default router;
