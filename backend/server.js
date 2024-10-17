
const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());


// Define the route to handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Check if the Excel file exists, or create a new one
    let workbook;
    if (fs.existsSync('visitor_data.xlsx')) {
        workbook = xlsx.readFile('visitor_data.xlsx');
    } else {
        workbook = xlsx.utils.book_new();
    }

    // Check if the worksheet exists, or create a new one
    let worksheet = workbook.Sheets['Visitors'];
    if (!worksheet) {
        worksheet = xlsx.utils.aoa_to_sheet([['Name', 'Email', 'Phone', 'Address', 'College Student', 'Student Status', 'How Heard', 'Membership', 'Prayer', 'Pastor Visit', 'More Info']]);
        xlsx.utils.book_append_sheet(workbook, worksheet, 'Visitors');
    }

    // Append the new form data to the worksheet
    const newRow = [
        formData.name,
        formData.email,
        formData.phone,
        formData.address,
        formData.collegeStudent,
        formData.studentStatus,
        formData.howHeard,
        formData.membership,
        formData.prayer,
        formData.pastorVisit,
        formData.moreInfo
    ];

    const sheetData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    sheetData.push(newRow);

    const newWorksheet = xlsx.utils.aoa_to_sheet(sheetData);
    workbook.Sheets['Visitors'] = newWorksheet;

    // Save the Excel file
    xlsx.writeFile(workbook, 'visitor_data.xlsx');

    res.json({ message: 'Form submitted successfully and saved to Excel!' });
});



// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
