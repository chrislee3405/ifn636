const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date },
});

module.exports = mongoose.model('Course', courseSchema);