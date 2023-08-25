require('dotenv').config();
const express = require('express');
const app = express();
const reactViews = require('jsx-view-engine');
const { createEngine } = require('react-dom/server');
const pokemonData = require('./models/pokemon.js');
mongoose = require('mongoose')




app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})


//app.get('/', (req, res) => {
  //res.send('Welcome to the Pokemon App!');
//});

app.get('/pokemon', (req, res) => {
  res.render('Index', { pokemon: pokemonData });
});

app.get('/pokemon/:id', (req, res) => {
  const id = req.params.id;
  res.render('Show', { pokemon: pokemonData, match: { params: { id } } });
});

app.get('/pokemon/new', (req, res) => {
  res.render('New');
});


  

  

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
