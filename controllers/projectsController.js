import pool from "../db/config.js";

export const getProjects = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.projects ORDER BY id"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching projects", err);
    res.status(500).json({ error: "Server Error" });
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
    res.status(500).json({ error: "Server Error" });
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
    res.status(500).json({ error: "Server Error" });
  }
};

export const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM public.projects WHERE id = $1",
      [id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching project", err);
    res.status(500).json({ error: "Server Error" });
  }
};

export const createProject = async (req, res) => {
  const {
    project_code,
    project_name,
    project_details,
    project_icon,
    project_status,
    project_repo,
    project_link,
    project_page,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO public.projects (project_code, project_name, project_details, project_icon, project_status, project_repo, project_link, project_page) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        project_code,
        project_name,
        project_details,
        project_icon,
        project_status,
        project_repo,
        project_link,
        project_page,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating project", err);
    res.status(500).json({ error: "Server Error" });
  }
};
