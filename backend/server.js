const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace with your MongoDB URI)
const uri = 'mongodb://localhost:27017/churchdb';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Import the Visitor model
const Visitor = require('./models/Visitor');

// POST route for form submission
app.post('/submit-form', async (req, res) => {
    try {
        // Create a new visitor from the form data
        const newVisitor = new Visitor({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            collegeStudent: req.body.collegeStudent,
            studentStatus: req.body.studentStatus,
            howHeard: req.body.howHeard,
            membership: req.body.membership,
            prayer: req.body.prayer,
            pastorVisit: req.body.pastorVisit === 'yes',
            moreInfo: req.body.moreInfo === 'yes'
        });

        // Save the visitor to the database
        await newVisitor.save();

        // Send a success response
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'An error occurred while submitting the form.' });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
