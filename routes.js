const express = require('express');
const router = express.Router();
const DataModel = require('./DataModel');

// GET route to fetch all data from the database
router.get('/data', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
