const express = require("express");
const projectRoutes = require("./projects");

const router = express.Router();

router.use("/projects", projectRoutes);

module.exports = router;
