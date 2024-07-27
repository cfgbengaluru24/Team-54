const mongoose = require('mongoose');

const healthReportSchema = new mongoose.Schema({
  childId: { type: mongoose.Schema.Types.ObjectId, ref: 'Child', required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  healthIssues: { type: String },
  doctorNotes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HealthReport', healthReportSchema);
