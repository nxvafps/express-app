import pool from "../db/config.js";

export const sendContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO public.contact (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating contact", err);
    res.status(500).json({ error: "Error creating contact" });
  }
};
