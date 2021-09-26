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

// INDEX
app.get('/budget/', (req, res) => {
    res.render('index.ejs', {budget, budget});
})

// NEW

// CREATE

// SHOW
app.get('/budget/:indexOfBudget', (req, res) =>{
    res.render("show.ejs", {budget: budget[req.params.indexOfBudget]});
})


// Listener
app.listen(3000, () => {
    console.log('listening');
})