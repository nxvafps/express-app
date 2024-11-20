import pool from "../db/config.js";

export const getBlogPosts = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.blog_posts ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching blog posts", err);
    res.status(500).json({ error: "Error fetching blog posts" });
  }
};

export const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM public.blog_posts WHERE id = $1",
      [id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching blog post", err);
    res.status(500).json({ error: "Error fetching blog post" });
  }
};

export const createBlogPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO public.blog_posts (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating blog post", err);
    res.status(500).json({ error: "Error creating blog post" });
  }
};
