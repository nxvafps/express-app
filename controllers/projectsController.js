import pool from "../db/config.js";

export const getProjects = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM public.projects");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
