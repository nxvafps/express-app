import express from "express";
import {
  getProjects,
  getCurrentProjects,
  getPlannedProjects,
  getProjectById,
  createProject,
} from "../controllers/projectsController.js";

const router = express.Router();
router.get("/", getProjects);
router.get("/current", getCurrentProjects);
router.get("/planned", getPlannedProjects);
router.get("/project/:id", getProjectById);
router.post("/", createProject);

export default router;
