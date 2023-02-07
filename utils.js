const { readFile } = require("fs/promises");
const { sighting } = require("./db/models");

module.exports = {
  getSightings: () => sighting.findAll(),
  sightingByReportNumber: async (reportNumber) => {
    const options = {};
    if (reportNumber) options.where = { report_number: reportNumber };
    return sighting.findOne(options);
  },
};
