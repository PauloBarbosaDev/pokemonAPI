const express = require('express');
const pokemon = require('./rotas/pokemon');
const app = express();

app.use(express.json());

app.use(pokemon);

app.listen(8000);
