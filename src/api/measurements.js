const { Router } = require("express");
const Measurement = require("../model/schema");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const entries = await Measurement.find().sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const measurement = new Measurement(req.body);
    const createdMeasurement = await measurement.save();
    res.json(createdMeasurement);
  } catch (error) {
    console.log(error.name);
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updatedMeasurement = await Measurement.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updatedMeasurement);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const result = await Measurement.deleteOne({ _id: req.params.id });
    res.json(result);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
