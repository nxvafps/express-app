const express = require("express");
const pool = require("../config/db");

const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM public.projects");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Get all projects where current_project = 'y'
router.get("/current", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.projects WHERE current_project = 'y'"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
