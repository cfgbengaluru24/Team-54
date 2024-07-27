const express = require("express");
const mongoose = require("mongoose");

const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ngo_education", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

const educationalReportSchema = new mongoose.Schema({
    studentId: String,
    name: String,
    report: String,
    createdAt: { type: Date, default: Date.now }
});

const EducationalReport = mongoose.model("EducationalReport", educationalReportSchema);

const updateData = async (id, data) => {
    try {
        const report = await EducationalReport.findByIdAndUpdate(id, data, { new: true });
        console.log("Updated Report:", report);
    } catch (err) {
        console.error("Error updating report:", err.message);
    }
};

const getData = async (id) => {
    try {
        const report = await EducationalReport.findById(id);
        console.log("Retrieved Report:", report);
    } catch (err) {
        console.error("Error retrieving report:", err.message);
    }
};

const postData = async (form) => {
    try {
        const newReport = new EducationalReport(form);
        await newReport.save();
        console.log("New Report Added:", newReport);
    } catch (err) {
        console.error("Error saving report:", err.message);
    }
};

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
    console.log(`Server running on port ${Port}.`);
});
