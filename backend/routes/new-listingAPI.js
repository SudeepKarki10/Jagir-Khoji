const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const jobData = req.body;
    // Save jobData to the database or perform necessary actions
    res.status(200).json({ success: true, data: jobData });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

router.get("/new-listing", async (req, res) => {
  try {
    res.status(200).json({ msg: "Hello from sudeep" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
