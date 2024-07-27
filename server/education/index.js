const express = require("express");
const mongoose = require("mongoose"); // Import mongoose here
require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB = require("./config/db");

const app = express();
const Port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connectDB();

// EducationalReport model definition
const educationalReportSchema = new mongoose.Schema({
  childId: { type: mongoose.Schema.Types.ObjectId, ref: 'Child', required: true },
  subject: { type: String, required: true },
  marks: { type: Number, required: true },
  comments: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const EducationalReport = mongoose.model("EducationalReport", educationalReportSchema);

const updateData = async (id, data) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.error("Invalid ID format");
        throw new Error("Invalid ID format");
    }

    try {
        const report = await EducationalReport.findByIdAndUpdate(id, data, { new: true });
        if (!report) {
            console.log("Report not found");
            throw new Error("Report not found");
        }
        console.log("Updated Report:", report);
        return report;
    } catch (err) {
        throw new Error("Error updating report: " + err.message);
    }
};

const getData = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.error("Invalid ID format");
        throw new Error("Invalid ID format");
    }

    try {
        const report = await EducationalReport.findById(id);
        if (!report) {
            console.log("Report not found");
            throw new Error("Report not found");
        }
        console.log("Retrieved Report:", report);
        return report;
    } catch (err) {
        throw new Error("Error retrieving report: " + err.message);
    }
};

const postData = async (form) => {
    try {
        const newReport = new EducationalReport(form);
        await newReport.save();
        console.log("New Report Added:", newReport);
    } catch (err) {
        throw new Error("Error saving report: " + err.message);
    }
};

// Routes
app.put("/edu/data/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        await updateData(id, data);
        res.status(200).send("Report Updated");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get("/edu/data/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const report = await getData(id);
        res.status(200).json(report);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post("/edu/data", async (req, res) => {
    const form = req.body;

    try {
        await postData(form);
        res.status(201).send("Report Created");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(Port, () => {
    console.log(process.env.MONGO_DB_URI);
    console.log(`Server running on port ${Port}.`);
});
