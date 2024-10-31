import express from "express";
import { config } from "dotenv";
import setupMiddlewares from "./middlewares";
import routes from "./routes";

config();

const app = express();
const port = process.env.PORT || 3000;

// Setup middlewares
setupMiddlewares(app);

// Setup routes
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
