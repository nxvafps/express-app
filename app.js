import express from "express";
import projectsRouter from "./routes/projects.js";
import setupMiddlewares from "./middlewares/index.js";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 3000;

//middlewares
setupMiddlewares(app);

//routes
app.use("/projects", projectsRouter);

//start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
