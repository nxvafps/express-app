import express from "express";
import {
  getBlogPosts,
  getBlogPostById,
  createBlogPost,
} from "../controllers/blogPostsController.js";

const router = express.Router();
router.get("/", getBlogPosts);
router.get("/post/:id", getBlogPostById);
router.post("/", createBlogPost);

export default router;
