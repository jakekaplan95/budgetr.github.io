// Import Express library
const express = require('express');

// Creating Application Objects
const app = express();

// Import Budgets from budget.js
const budget = require("./models/budget")

/////////////////
// Middleware
/////////////////
app.use(express.static("public"))


/////////////////
// Routes
/////////////////

// Index Route
app.get('/', (req, res) => {
    res.render('index.ejs')
})




// Listener
app.listen(3000, () => {
    console.log('listening');
})