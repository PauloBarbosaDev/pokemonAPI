const { listarPokemons, detalharPokemon } = require('../dados/pokemon');

const exibirPokemons = async (req, res) => {
  try {
    const { pagina } = req.query;

    if (pagina) {
      const { results } = await listarPokemons(pagina);
      return res.status(200).json(results);
    }

    const { results } = await listarPokemons();
    return res.status(200).json(results);
  } catch (error) {
    console.error('Erro ao listar os pokemons');
  }
};

const exibirPokemonPorIdOuNome = async (req, res) => {
  try {
    const { indice } = req.params;

    if (indice) {
      const {
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species,
      } = await detalharPokemon(indice);
      const informacoesDoPokemon = {
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species,
      };

      return res.status(200).json(informacoesDoPokemon);
    }
  } catch (error) {
    console.error('Erro ao listar o pokemon por nome ou id');
  }
};

module.exports = { exibirPokemons, exibirPokemonPorIdOuNome };
