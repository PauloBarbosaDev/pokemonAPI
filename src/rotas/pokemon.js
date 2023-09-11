const express = require('express');
const {
  exibirPokemons,
  exibirPokemonPorIdOuNome,
} = require('../controlador/pokemon');
const rota = express();

rota.get('/pokemon', exibirPokemons);
rota.get('/pokemon/:indice', exibirPokemonPorIdOuNome);

module.exports = rota;
