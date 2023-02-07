const { getSightings, sightingByReportNumber } = require("../utils");
const { sightings } = require("../db/models");

module.exports = {
  async getAllSightings(req, res) {
    const sightings = await getSightings();
    res.json(sightings);
  },
  async getSightingByReportNumber(req, res) {
    const sighting = await sightingByReportNumber(req.params.reportNumber);
    if (sighting) res.json(sighting);
    else res.status(500);
  },
};
