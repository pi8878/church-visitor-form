
const mongoose = require('mongoose');

// Define the schema for a Visitor
const visitorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    collegeStudent: { type: String },
    studentStatus: { type: String },
    howHeard: { type: String },
    membership: { type: String },
    prayer: { type: String },
    pastorVisit: { type: Boolean, default: false },
    moreInfo: { type: Boolean, default: false }
});

// Create and export the model
const Visitor = mongoose.model('Visitor', visitorSchema);
module.exports = Visitor;
