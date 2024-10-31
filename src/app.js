const express = require("express");
const dotenv = require("dotenv");
const setupMiddlewares = require("./middlewares");
const routes = require("./routes");

dotenv.config();

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

module.exports = app;
