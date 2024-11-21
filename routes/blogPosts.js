import express from "express";
import {
  getBlogPosts,
  getBlogPostById,
  createBlogPost,
} from "../controllers/blogPostsController.js";

const router = express.Router();
router.get("/posts", getBlogPosts);
router.get("/post/:id", getBlogPostById);
router.post("/posts", createBlogPost);

export default router;
