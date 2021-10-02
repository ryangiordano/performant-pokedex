const Pokedex = require("pokeapi-js-wrapper");
const options = {
  protocol: "https",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000, // 5s
  cacheImages: true,
};

const PokemonService = new Pokedex.Pokedex(options);
export default PokemonService;
