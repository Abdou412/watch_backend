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

// Read a single watch by ID
router.get("/watches/:id", async (req, res) => {
  try {
    const watch = await Watch.findById(req.params.id);
    if (!watch) {
      return res.status(404).send();
    }
    res.status(200).send(watch);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a watch by ID using PATCH
router.patch("/watches/:id", async (req, res) => {
  try {
    const watch = await Watch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!watch) {
      return res.status(404).send();
    }
    res.status(200).send(watch);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a watch by ID using PUT
router.put("/watches/:id", async (req, res) => {
  try {
    const watch = await Watch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      overwrite: true, // This option ensures the entire document is replaced
    });
    if (!watch) {
      return res.status(404).send();
    }
    res.status(200).send(watch);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a watch by ID
router.delete("/watches/:id", async (req, res) => {
  try {
    const watch = await Watch.findByIdAndDelete(req.params.id);
    if (!watch) {
      return res.status(404).send();
    }
    res.status(200).send(watch);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = (app) => {
  app.use("/api", router);
};
