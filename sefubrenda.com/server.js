const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // MySQL driver
const app = express();
const port = 3000;
const dotenv = require('dotenv'); // Load environment variables from .env
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err.stack);
        return;
    }
    console.log('Connected to database');
});

app.post('/process_rsvp', (req, res) => {
    const name = req.body.name;
    const knownAllergies = req.body.known_allergies;
    const numGuests = req.body.num_guests;

    // Log the input data to the console
    console.log('Received RSVP:', {
        name: name,
        knownAllergies: knownAllergies,
        numGuests: numGuests,
    });

    // Insert data into the database
    const sql = 'INSERT INTO RSVPs (Name, KnownAllergies, NumberOfGuests) VALUES (?, ?, ?)';
    db.query(sql, [name, knownAllergies, numGuests], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Inserted into database:', result);
            res.send('RSVP submitted successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
