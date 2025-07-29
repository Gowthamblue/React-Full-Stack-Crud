const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@104050',
    database: 'recipes'
});


db.connect((err) =>
{
    if(err)
    {
        console.error('Failed' + err);
        return;
    }
    console.log('Connected to databases');
});

// // API: Get all recipes
app.get('/recipes', (req, res) => {
  db.query('SELECT * FROM recipes', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// // API: Search recipes by title
app.get('/recipes/search', (req, res) => {
  const searchTerm = req.query.term;
  db.query('SELECT * FROM recipes WHERE title LIKE ?', [`%${searchTerm}%`], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// API: Upload a new recipe
app.post('/recipes', (req, res) => {
  const { title, ingredients, instructions } = req.body;
  db.query('INSERT INTO recipes (title, ingredients, instructions) VALUES (?, ?, ?)', [title, ingredients, instructions], (err) => {
    if (err) throw err;
    res.send('Recipe added!');
  });
});

// API: Add a rating to a recipe
app.post('/ratings', (req, res) => {
  const { recipe_id, rating } = req.body;
  db.query('INSERT INTO ratings (recipe_id, rating) VALUES (?, ?)', [recipe_id, rating], (err) => {
    if (err) throw err;
    res.send('Rating added!');
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Backend server running on port 5000');
});