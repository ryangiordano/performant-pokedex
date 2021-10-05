declare type Type = {
  slot: 1 | 2;
  type: {
    name:
      | "flying"
      | "fire"
      | "water"
      | "fairy"
      | "fighting"
      | "electric"
      | "ice"
      | "rock"
      | "ground"
      | "steel"
      | "normal"
      | "poison"
      | "ghost"
      | "dragon"
      | "dark"
      | "grass"
      | "bug"
      | "psychic";
  };
};

declare type PokemonType = {
  name: string;
  id: number;
  height: number;
  weight: number;
  species: {
    name: string;
  };
  sprites: {
    back_female: string;
    back_shiny_female: string;
    back_default: string;
    front_female: string;
    front_shiny_female: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  types: Type[];
};

declare module "pokeapi-js-wrapper";
