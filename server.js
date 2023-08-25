const express = require('express');
const app = express();
const reactViews = require('jsx-view-engine');
const { createEngine } = require('react-dom/server');
const pokemonData = require('./models/pokemon.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//app.get('/', (req, res) => {
  //res.send('Welcome to the Pokemon App!');
//});

app.get('/pokemon', (req, res) => {
  res.render('Index', { pokemon: pokemonData });
});
//app.get('/pokemon/:id', (req, res) => {
 // const pokemonId = req.params.id;
 // const selectedPokemon = pokemonData[pokemonId];
 // res.send(`You selected Pokemon ID: ${pokemonId}`);
//});

app.get('/pokemon/:id', (req, res) => {
  const id = req.params.id;
  res.render('Show', { pokemon: pokemonData, match: { params: { id } } });
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
