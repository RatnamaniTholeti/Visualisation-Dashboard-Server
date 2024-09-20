const mongoose = require('mongoose');

// Define the schema
const DataSchema = new mongoose.Schema({
  end_year: { type: String, default: '' },
  intensity: { type: Number },
  sector: { type: String },
  topic: { type: String },
  insight: { type: String },
  url: { type: String },
  region: { type: String },
  start_year: { type: String, default: '' },
  impact: { type: String, default: '' },
  added: { type: Date, default: Date.now },
  published: { type: Date },
  country: { type: String },
  relevance: { type: Number },
  pestle: { type: String },
  source: { type: String },
  title: { type: String },
  likelihood: { type: Number }
});

// Create the model
const DataModel = mongoose.model('AnnualEnergyReports', DataSchema);

// Export the model
module.exports = DataModel;
