const mongoose = require('mongoose');

const educationalReportSchema = new mongoose.Schema({
  childId: { type: mongoose.Schema.Types.ObjectId, ref: 'Child', required: true },
  subject: { type: String, required: true },
  marks: { type: Number, required: true },
  comments: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EducationalReport', educationalReportSchema);
