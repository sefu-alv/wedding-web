// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize"); // Import Sequelize
const app = express();
const port = 3000;

// Create a Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

// Define a model for the RSVP data
const RSVP = sequelize.define("RSVP", {
  name: Sequelize.STRING,
  knownAllergies: Sequelize.STRING,
  numGuests: Sequelize.INTEGER,
});

app.use(bodyParser.urlencoded({ extended: true }));

// Handle the POST request from the RSVP form
app.post("/process_rsvp", (req, res) => {
  const name = req.body.name;
  const knownAllergies = req.body.known_allergies;
  const numGuests = req.body.num_guests;

  app.get("/api/rsvps", (req, res) => {
    RSVP.findAll()
      .then((rsvps) => {
        res.json(rsvps);
      })
      .catch((error) => {
        console.error("Error fetching RSVP data:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });

  // Insert data into the database
  RSVP.create({
    name: name,
    knownAllergies: knownAllergies,
    numGuests: numGuests,
  })
    .then(() => {
      res.send("RSVP submitted successfully!");
    })
    .catch((error) => {
      console.error("Database error:", error);
      res.status(500).send("Internal Server Error");
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
