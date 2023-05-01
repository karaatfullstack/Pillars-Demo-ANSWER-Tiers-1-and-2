const router = require("express").Router();
const {
  models: { Place },
} = require("../db");

// Add your routes here:
router.get("/unassigned", async (req, res, next) => {
  try {
    res.send(await Place.findCitiesWithNoParent());
  } catch (error) {
    next(error);
  }
});

router.get("/states", async (req, res, next) => {
  try {
    res.send(await Place.findStatesWithCities());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
