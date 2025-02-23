const express = require("express");
const Watch = require("../models/index");

const router = express.Router();

// Create a new watch
router.post("/watches", async (req, res) => {
  try {
    const watch = new Watch(req.body);
    await watch.save();
    res.status(201).send(watch);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all watches
router.get("/watches", async (req, res) => {
  try {
    const watches = await Watch.find();
    res.status(200).send(watches);
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = (app) => {
  app.use("/api", router);
};
