const { Router } = require("express");
const sightingsController = require("../controllers/sightings");
const sightingsRouter = Router();

sightingsRouter.get("/", sightingsController.getAllSightings);
sightingsRouter.get(
  "/:reportNumber",
  sightingsController.getSightingByReportNumber
);
module.exports = {
  sightingsRouter,
};
