const express = require('express');
const app = express();
const reactViews = require('jsx-view-engine');
const { createEngine } = require('react-dom/server');

const pokemonData = require('./models/pokemon.js');

app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

//app.get('/', (req, res) => {
  //res.send('Welcome to the Pokemon App!');
//});

app.get('/pokemon', (req, res) => {
  res.render('Index', { pokemon: pokemonData });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
