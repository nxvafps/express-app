import pool from "../db/config.js";

export const getProjects = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.projects ORDER BY id"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching projects", err);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
};

export const getCurrentProjects = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.projects WHERE project_status = 'current' ORDER BY id"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching projects", err);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
};

export const getPlannedProjects = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.projects WHERE project_status = 'planned' ORDER BY id"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching projects", err);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
};
