const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  enrolledDate: { type: Date, default: Date.now },
  educationalReports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'EducationalReport' }],
  healthReports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HealthReport' }]
});

module.exports = mongoose.model('Child', childSchema);
